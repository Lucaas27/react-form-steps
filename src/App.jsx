import Numbers from "./components/Numbers";
import Description from "./components/Description";
import Buttons from "./components/Buttons";
import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

function App() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  return (
    <>
      <button
        className="close"
        onClick={() => setIsOpen((currOpenState) => !currOpenState)}
      >
        {isOpen ? "×" : "☰"}
      </button>
      {isOpen && (
        <div className="steps">
          <Numbers step={step} />
          <Description step={step} messages={messages} />
          <Buttons step={step} setStep={setStep} />
        </div>
      )}
    </>
  );
}

export default App;
