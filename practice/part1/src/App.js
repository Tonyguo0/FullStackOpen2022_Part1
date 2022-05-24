import { useState } from "react";

const History = (props) => {
  if (props.allClicks.length === 0) {
    return <div>the app is used by pressing the buttons</div>;
  }
  return <div>button press history: {props.allClicks.join(" ")}</div>;
};

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>{text}</button>
);

const App = () => {
  const [left, setLeft] = useState(0);
  const [right, setRight] = useState(0);
  const [allClicks, setAll] = useState([]);

  const handleLeftClick = () => {
    setAll(allClicks.concat("L"));
    setLeft(left + 1);
  };

  const handleRightClick = () => {
    setAll(allClicks.concat("R"));
    setRight(right + 1);
  };

  const Hello = (word) => () => {
    console.log("Hello ", word);
  };

  // setTimeout(() => setCounter(counter + 1), 1000);
  // console.log("rendering...", counter);
  const name = "Tony";
  const age = 10;
  return (
    <>
      <button onClick={Hello("Tony")}>tony</button>
      {left}
      <Button handleClick={handleLeftClick} text="left" />
      <Button handleClick={handleRightClick} text="right" />

      {right}

      <History allClicks={allClicks} />
      <Footer />
    </>
  );
};

const Footer = () => {
  return (
    <div>
      greetings app created by <a href="http://github.com/tonyguo0">tonyguo</a>
    </div>
  );
};
export default App;
