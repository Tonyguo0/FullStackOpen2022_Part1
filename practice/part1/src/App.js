import { useState } from "react";

const App = () => {
  const [clicks, setClicks] = useState({ left: 0, right: 0 });

  const handleLeftClick = () => setClicks({ ...clicks, left: clicks.left + 1 });

  const handleRightClick = () =>
    setClicks({ ...clicks, right: clicks.right + 1 });

  // setTimeout(() => setCounter(counter + 1), 1000);
  // console.log("rendering...", counter);
  const name = "Tony";
  const age = 10;
  return (
    <>
      {clicks.left}
      <button
        onClick={() => {
          handleLeftClick();
        }}
      >
        left
      </button>
      <button
        onClick={() => {
          handleRightClick();
        }}
      >
        right
      </button>
      {clicks.right}
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
