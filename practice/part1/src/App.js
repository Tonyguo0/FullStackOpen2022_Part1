const Hello = (props) => {
  return (
    <div>
      <p>
        Hello {props.name} {props.age}
      </p>
    </div>
  );
};

const App = () => {
  const name = "Tony";
  const age = 10;
  return (
    <>
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
