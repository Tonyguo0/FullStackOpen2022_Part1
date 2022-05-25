import { useState } from "react";
import "./App.css";

const Statistics = ({ good, neutral, bad }) => {
  const all = good + neutral + bad;
  const average = (bad * -1 + good) / all;
  const positive = (good / all) * 100;
  if (all <= 0) {
    return <>No feedback given</>;
  }

  return (
    <>
      <StatisticLine text="good" value={good} />
      <StatisticLine text="neutral" value={neutral} />
      <StatisticLine text="bad" value={bad} />
      <StatisticLine text="all" value={all} />
      <StatisticLine text="average" value={average} />
      <StatisticLine text="positive" value={positive + "%"} />
    </>
  );
};

const StatisticLine = ({ text, value }) => {
  return (
    <table>
      <tbody>
        <tr>
          <td>{text}</td>

          <td>{value}</td>
        </tr>
      </tbody>
    </table>
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
