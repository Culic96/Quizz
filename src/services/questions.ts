import { useState } from 'react';
import { v4 as uuid } from 'uuid';
export interface Question {
  id: string;
  question: string;
  correctAnswer: string;
}

const API_KEY = 'https://opentdb.com/api.php?amount=10&type=boolean';

export function useQuestions() {
  const [isLoading, setIsLoading] = useState(false);
  const [questions, setQuestions] = useState([] as Question[]);
  const [error, setError] = useState<string | null>(null);

  const fetchQuestions = async (category, difficulty) => {
    try {
      setError(null);
      setIsLoading(true);
      await fetch(`${API_KEY}&category=${category}&difficulty=${difficulty}`)
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          setQuestions(
            data.results.map(
              (qRes) =>
                ({
                  id: uuid(),
                  question: qRes.question,
                  correctAnswer: qRes.correct_answer,
                } as Question),
            ),
          );
          setIsLoading(false);
        });
    } catch (err) {
      console.error(err);
      const { message } = err as { message: string };
      setError(message);
      setIsLoading(false);
    }
  };

  const validateAnswer = (id, answer) => {
    const foundQuestion = questions.find((q) => q.id === id);
    if (foundQuestion) {
      return foundQuestion.correctAnswer == answer;
    }
    return false;
  };

  return {
    isLoading,
    questions,
    fetchQuestions,
    validateAnswer,
    error,
  };
}
