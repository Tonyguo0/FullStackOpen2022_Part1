import { useState } from "react";

const Hello = ({ name, age }) => {
  /*** can destructure the props object passed to the component function as a parameter */
  // const {name, age} = props
  const bornYear = () => new Date().getFullYear() - age;

  return (
    <div>
      <p>
        Hello {name} {age}
      </p>
      <p>So you were probably born in {bornYear()}</p>
    </div>
  );
};

const Display = (props) => {
  return <h1>{props.counter}</h1>;
};

const Button = (props) => {
  return <button onClick={props.onClick}>{props.text}</button>;
};

const App = () => {
  const [counter, setCounter] = useState(0);

  const handleClick = () => {
    console.log("clicked");
  };
  const increaseByOne = () => {
    setCounter(counter + 1);
  };
  const decreaseByOne = () => {
    setCounter(counter - 1);
  };

  const setToZero = () => setCounter(0);

  // setTimeout(() => setCounter(counter + 1), 1000);
  // console.log("rendering...", counter);
  const name = "Tony";
  const age = 10;
  return (
    <>
      <Display counter={counter} />
      <Button onClick={increaseByOne} text="plus" />
      <Button onClick={decreaseByOne} text="minus" />
      <Button onClick={setToZero} text="zero" />
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
