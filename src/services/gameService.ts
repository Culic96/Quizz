import { useEffect, useState } from 'react';
import { useProfiles } from './profileService';
import { Question, useQuestions } from './questions';

export enum GameState {
  NotStarted,
  Starting,
  InProgress,
  Errored,
  Finished,
  Loading,
}

export function useGameService() {
  const { isLoading, questions, fetchQuestions, validateAnswer } =
    useQuestions();
  const { setNewProfile } = useProfiles();
  const [currQuestionPointer, setCurrQuestionPointer] = useState(-1);
  const [currentAnswer, setCurrentAnswer] = useState('');
  const [points, setPoints] = useState(0);
  const [gameState, setGameState] = useState(GameState.NotStarted);
  const [hasGameStarted, setHasGameStarted] = useState(false);
  const [currQuestion, setCurrQuestion] = useState<Question | null>();
  const [username, setUsername] = useState('');

  const startGame = async (category, difficulty) => {
    setGameState(GameState.Starting);
    try {
      await fetchQuestions(category, difficulty);
      setGameState(GameState.InProgress);
    } catch (err) {
      console.error(err);
      setGameState(GameState.Errored);
    }
  };

  const endGame = () => {
    setNewProfile(username, points);
    setCurrQuestionPointer(-1);
    questions.length = 0;
    setGameState(GameState.Finished);
    setHasGameStarted(false);
  };
  useEffect(() => {
    // Starting the game
    if (questions.length > 0 && currQuestionPointer === -1) {
      setCurrQuestion(questions[0]);
      setGameState(GameState.InProgress);
      setCurrQuestionPointer(0);
      setPoints(0);
    }

    console.log({ questions, isLoading });
  }, [questions, currQuestionPointer, isLoading]);
  const getNextQuestion = () => {
    if (currQuestionPointer === 9) {
      return endGame();
    }

    const nextQuestionPtr = currQuestionPointer + 1;
    setCurrQuestionPointer(nextQuestionPtr);
    setCurrQuestion(questions[nextQuestionPtr]);
  };

  const setCurrentAnswerHandler = (answer) => {
    return setCurrentAnswer(answer);
  };

  const handleAnswerCheck = () => {
    if (
      validateAnswer(questions[currQuestionPointer].id, currentAnswer) === true
    ) {
      setPoints(points + 5);
    } else if (
      validateAnswer(questions[currQuestionPointer].id, currentAnswer) === false
    ) {
      setPoints(points - 3);
    }
    setCurrentAnswerHandler('');

    return getNextQuestion();
  };

  return {
    gameState,
    currQuestion,
    username,
    setHasGameStarted,
    hasGameStarted,
    getNextQuestion,
    current: currQuestionPointer,
    setCurrentAnswer,
    setCurrentAnswerHandler,
    handleAnswerCheck,
    currentAnswer,
    points,
    startGame,
    setGameState,
    setUsername,
  };
}
