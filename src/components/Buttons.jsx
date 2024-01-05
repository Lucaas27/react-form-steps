/* eslint-disable react/prop-types */
const Buttons = ({ step, setStep }) => {
  const clickHandler = (e) => {
    if (e.target.innerText === "Next") {
      step < 3 && setStep((currStep) => currStep + 1);
    } else {
      step > 1 && setStep((currStep) => currStep - 1);
    }
  };

  return (
    <div className="buttons">
      <button onClick={clickHandler}>Previous</button>
      <button onClick={clickHandler}>Next</button>
    </div>
  );
};

export default Buttons;
