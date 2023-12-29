import Numbers from "./components/Numbers";
import Description from "./components/Description";
import Buttons from "./components/Buttons";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

function App() {
  const step = 1;
  return (
    <div className="steps">
      <Numbers step={step} />
      <Description step={step} messages={messages} />
      <Buttons />
    </div>
  );
}

export default App;
