import { useState } from "react";

const Statistics = ({ good, neutral, bad }) => {
  const all = good + neutral + bad;
  if (all <= 0) {
    return <>No feedback given</>;
  }

  return (
    <>
      <StatisticLine text="good" value={good} />
      <StatisticLine text="neutral" value={neutral} />
      <StatisticLine text="bad" value={bad} />
      <AllLine text="all" all={all} />
      <AverageLine text="average" bad={bad} good={good} all={all} />
      <PositiveLine text="positive" good={good} all={all} />
    </>
  );
};

const StatisticLine = ({ text, value }) => {
  return (
    <p>
      {text} {value}
    </p>
  );
};

const AllLine = ({ text, all }) => {
  return (
    <p>
      {text} {all}
    </p>
  );
};

const AverageLine = ({ text, bad, good, all }) => {
  const average = () => {
    return (bad * -1 + good) / all;
  };

  return (
    <p>
      {text} {average()}
    </p>
  );
};

const PositiveLine = ({ text, good, all }) => {
  const positive = () => {
    return (good / all) * 100;
  };

  return (
    <p>
      {text} {positive()}%
    </p>
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
