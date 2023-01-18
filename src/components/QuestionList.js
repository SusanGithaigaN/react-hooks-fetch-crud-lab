import React from "react";
import { useState, useEffect } from "react";
import QuestionItem from "./QuestionItem";
function QuestionList() {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    fetch(" http://localhost:4000/questions")
    .then((res) => res.json())
    .then((questions) => setQuestions(questions));
  }, []);
   console.log(questions);
// render the return value of the map to the component
const questionItem =questions.map((quiz)=>(
  <QuestionItem 
  key={quiz.id}
  question={quiz}
  />
))
  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{questionItem}</ul>
    </section>
  );
}

export default QuestionList;
