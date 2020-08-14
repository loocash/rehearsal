import React from "react";

const Button = ({ children, onClick }) => (
  <button
    className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
    onClick={onClick}
  >
    {children}
  </button>
);

const Display = ({ question, onClick }) => {
  const { word, answers } = question;
  return (
    <div className="mt-4">
      <h2 className="text-2xl my-8 font-light">{word}</h2>
      <div className="flex justify-around mt-4">
        {answers.map((answer, idx) => (
          <Button key={idx} onClick={() => onClick(answer)}>
            {answer}
          </Button>
        ))}
      </div>
    </div>
  );
};

const Results = ({ questions }) => {
  const score = questions.reduce(
    (acc, question) => acc + (question.checked === question.actual ? 1 : 0),
    0
  );

  return (
    <div className="my-4">
      <h2 className="text-2xl my-4">Results</h2>
      <h3 className="text-xl">
        Score: {score}/{questions.length}
      </h3>
    </div>
  );
};

const renderer = (position, questions, handleChoice, handleReset) => (
  <div className="text-center">
    <h1 className="text-4xl font-hairline italic tracking-widest">Rehearsal</h1>
    {position < questions.length ? (
      <>
        <h2 className="font-light">
          {position + 1}/{questions.length}
        </h2>
        <Display question={questions[position]} onClick={handleChoice} />
      </>
    ) : (
      <>
        <Results questions={questions} />
        <Button onClick={handleReset}>Start Over</Button>
      </>
    )}
  </div>
);

export default renderer;
