import styled from '@emotion/styled';
import { Box, Button, InputLabel, TextField, Typography } from '@mui/material';

export const GamePickerWrapper = styled(Box)({
  //   backgroundImage: 'url(/quizzBackground.webp)',
  height: '80vh',
  width: '500px',
  display: 'flex',
  gap: '12px',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  boxShadow:
    '0px 2px 4px -12px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 12px 10px 0px rgb(0 0 0 / 12%)',
});

export const FormHeading = styled(Typography)({
  fontSize: '24px',
  color: '#fff',
});

export const GameStartedWrapper = styled(Box)({
  height: '400px',
  width: '500px',
  //   backgroundImage: 'url(/quizzBackground.webp)',
  backgroundSize: 'cover',
  textAlign: 'center',
  border: '1px groove #fff',
  padding: '24px',
  boxShadow:
    '0px 2px 4px -12px rgb(0 0 0 / 40%), 0px 4px 5px 6px rgb(0 0 0 / 14%), 0px 12px 10px 0px rgb(0 0 0 / 12%)',
});

export const CurrQuestionWrapper = styled(Box)({
  height: '40px',
  textAlign: 'center',
});

export const QuestionTextField = styled(TextField)({
  input: {
    color: 'white',
    '&:focus': {
      color: '#fff',
    },
  },
});

export const QuestionWrapper = styled(Box)({
  textAlign: 'center',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

export const QuestionText = styled(Typography)({
  fontSize: '24px',
  color: '#fff',
});

export const ButtonWrapper = styled(Box)({
  margin: '20px',
  width: '100%',
  display: 'flex',
  justifyContent: 'space-evenly',
  alignItems: 'center',
});

export const AnswerButton = styled(Button)({
  width: '120px',
  height: '40px',
  padding: '12px',
  backgroundColor: 'transparent',
  color: '#fff',
  '&:hover': {
    backgroundColor: '##1976d2',
  },
});

export const CustomInputLabel = styled(InputLabel)({
  label: {
    color: '#fff',
    '&:focus': {
      color: '#fff',
      '&:before': {
        color: '#fff',
        backgroundColor: '#fff',
      },
    },
  },
});
