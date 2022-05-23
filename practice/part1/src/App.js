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

// const Display = (props) => {
//   return <h1>{props.counter}</h1>;
// };

const App = () => {
  const [counter, setCounter] = useState(0);

  const handleClick = () => {
    console.log("clicked");
  };
  const increaseByOne = () => {
    setCounter(counter + 1);
  };

  const setToZero = () => setCounter(0);

  // setTimeout(() => setCounter(counter + 1), 1000);
  // console.log("rendering...", counter);
  const name = "Tony";
  const age = 10;
  return (
    <>
      {/* <Display counter={counter}></Display> */}
      <h1>{counter}</h1>
      <button onClick={increaseByOne}>plus</button>
      <button onClick={setToZero}>re-zero</button>
      {/* <h1>Greetings</h1>
      <Hello name={name} age={age + 14} />
      <Hello name="Tony1" age={age + 32} />
      <Hello name="Tony22" age={age + 43} /> */}
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
