import { useEffect, useState } from "react";

const Most = ({ anecdotes, most, count }) => {
  return (
    <div>
      <h1>Anecdote with most votes</h1>
      {anecdotes[most]}
      <div>has {count[most]} votes</div>
    </div>
  );
};

const App = () => {
  const [selected, setSelected] = useState(0);
  const [count, setCount] = useState(new Uint8Array(7));
  const [most, setMost] = useState(0);

  const Rand = (min, max) => {
    let random = Math.floor(Math.random() * (max - min) + min);
    if (random === selected) {
      random = (selected + 1) % anecdotes.length;
    }
    setSelected(random);
  };

  const Vote = () => {
    const copy = [...count];
    copy[selected]++;
    setCount(copy);
  };

  useEffect(() => {
    const max = Math.max(...count);
    const index = count.indexOf(max);
    setMost(index);
    console.log("in use effect index = ", index)
  }, [count]);

  const anecdotes = [
    "If it hurts, do it more often",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients",
  ];

  return (
    <>
      <div>
        <h1>Anecdote of the day</h1>
        {anecdotes[selected]}
        <div>has {count[selected]} votes</div>
        <div>
          <button onClick={Vote}>vote</button>

          <button onClick={() => Rand(0, anecdotes.length)}>
            next anecdote
          </button>
        </div>
      </div>

      <Most anecdotes={anecdotes} most={most} count={count} />
    </>
  );
};

export default App;
