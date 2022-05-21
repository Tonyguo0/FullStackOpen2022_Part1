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

const App = (props) => {
  const { counter } = props;

  const name = "Tony";
  const age = 10;
  return (
    <>
      <h1>{counter}</h1>
      <h1>Greetings</h1>
      <Hello name={name} age={age + 14} />
      <Hello name="Tony1" />
      <Hello name="Tony22" />
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
