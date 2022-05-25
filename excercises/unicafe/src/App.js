import { useState } from "react";

const Statistics = ({ good, neutral, bad }) => {
  const all = () => {
    return bad + good + neutral;
  };

  const average = () => {
    return (bad * -1 + good) / all();
  };

  const positive = () => {
    return (good / all()) * 100;
  };

  if (all() === 0) {
    return <>No feedback given</>;
  }

  return (
    <>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
      <p>all {all()}</p>
      <p>average {average()}</p>
      <p>positive {positive()}%</p>
    </>
  );
};

const Button = ({ feedback, text }) => {
  return (
    <>
      <button onClick={feedback}>{text}</button>
    </>
  );
};

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <>
      <h1>give feedback</h1>

      <div>
        <Button feedback={() => setGood(good + 1)} text="good" />
        <Button feedback={() => setNeutral(neutral + 1)} text="neutral" />
        <Button feedback={() => setBad(bad + 1)} text="bad" />
      </div>

      <h1>statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </>
  );
};

export default App;
