import { useEffect, useState } from 'react';

import { Button, FormControl, MenuItem, Select } from '@mui/material';
import GameFinished from '../GameFinished';
import Loader from '../Loader';
import { GameState, useGameService } from '@/services/gameService';
import {
  AnswerButton,
  ButtonWrapper,
  CurrQuestionWrapper,
  CustomInputLabel,
  FormHeading,
  GamePickerWrapper,
  GameStartedWrapper,
  QuestionText,
  QuestionTextField,
  QuestionWrapper,
} from './styled';

export interface Profile {
  name: string | null;
  points: string | null;
}

export default function GamePicker() {
  const {
    current,
    gameState,
    currQuestion,
    username,
    startGame,
    setCurrentAnswerHandler,
    handleAnswerCheck,
    setGameState,
    currentAnswer,
    points,
    setUsername,
    setHasGameStarted,
    hasGameStarted,
  } = useGameService();
  const [category, setCategory] = useState('');
  const [difficulty, setDifficulty] = useState('');
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    if (
      gameState === GameState.InProgress ||
      gameState === GameState.Finished ||
      gameState === GameState.Errored
    ) {
      setLoader(false);
    } else if (gameState === GameState.Starting) {
      setLoader(true);
    }
  }, [gameState]);

  const handleForm = () => {
    startGame(category, difficulty);
  };

  return (
    <>
      {!hasGameStarted && gameState === GameState.NotStarted && !loader && (
        <>
          <GamePickerWrapper>
            <FormHeading>Please enter username</FormHeading>
            <QuestionTextField
              label="Username"
              variant="filled"
              onChange={(e) => setUsername(e.target.value)}
            />
            <FormHeading>Please select category</FormHeading>
            <FormControl sx={{ m: 2, height: '30px', width: '200px' }}>
              <CustomInputLabel id="category">Category</CustomInputLabel>
              <Select
                sx={{ color: '#fff' }}
                labelId="category"
                value={category}
                label="category"
                onChange={(e) => setCategory(e.target.value)}
              >
                <MenuItem value={23}>History</MenuItem>
                <MenuItem value={9}>General knowledge</MenuItem>
                <MenuItem value={24}>Politics</MenuItem>
                <MenuItem value={27}>Animals</MenuItem>
              </Select>
            </FormControl>
            <FormHeading>Please select difficulty</FormHeading>
            <FormControl sx={{ m: 2, height: '30px', width: '200px' }}>
              <CustomInputLabel id="difficulty">Difficulty</CustomInputLabel>
              <Select
                sx={{ color: '#fff' }}
                labelId="difficulty"
                value={difficulty}
                label="difficulty"
                onChange={(e) => setDifficulty(e.target.value)}
              >
                <MenuItem value={'easy'}>Easy</MenuItem>
                <MenuItem value={'medium'}>Medium</MenuItem>
                <MenuItem value={'hard'}>Hard</MenuItem>
              </Select>
            </FormControl>
            <Button
              sx={{ marginTop: '20px' }}
              variant="contained"
              onClick={() => {
                setHasGameStarted(true);
                handleForm();
              }}
            >
              Start Game
            </Button>
          </GamePickerWrapper>
        </>
      )}
      {loader && <Loader />}
      {!loader &&
        gameState === GameState.InProgress &&
        currQuestion &&
        hasGameStarted && (
          <>
            <GameStartedWrapper>
              <CurrQuestionWrapper>
                <QuestionText>Current question {current + 1} / 10</QuestionText>
              </CurrQuestionWrapper>
              <QuestionWrapper>
                <QuestionText>{currQuestion.question}</QuestionText>
              </QuestionWrapper>
              <ButtonWrapper>
                <AnswerButton
                  onClick={() => setCurrentAnswerHandler('True')}
                  variant="contained"
                >
                  {'True'}
                </AnswerButton>
                <AnswerButton
                  onClick={() => setCurrentAnswerHandler('False')}
                  variant="contained"
                >
                  {'False'}
                </AnswerButton>
              </ButtonWrapper>
              <QuestionText>Your Answer: {currentAnswer}</QuestionText>
              <Button onClick={handleAnswerCheck} variant="contained">
                Submit
              </Button>
              <QuestionText>
                Your score:
                {points}
              </QuestionText>
            </GameStartedWrapper>
          </>
        )}

      {gameState === GameState.Finished && (
        <>
          <GameFinished username={username} points={points} />
          <Button
            variant="contained"
            onClick={() => {
              setHasGameStarted(false);
              setGameState(GameState.NotStarted);
            }}
          >
            Play again
          </Button>
        </>
      )}
    </>
  );
}
