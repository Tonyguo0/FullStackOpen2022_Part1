import { useState } from "react";

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const goodFeedBack = () => {
    setGood(good + 1);
    return good;
  };

  const neutralFeedBack = () => {
    setNeutral(neutral + 1);
    return neutral;
  };

  const badFeedBack = () => {
    setBad(bad + 1);
    return bad;
  };

  return (
    <>
      <h1>give feedback</h1>

      <div>
        <button onClick={goodFeedBack}>good</button>
        <button onClick={neutralFeedBack}>neutral</button>
        <button onClick={badFeedBack}>bad</button>
      </div>

      <h1>statistics</h1>

      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
    </>
  );
};

export default App;