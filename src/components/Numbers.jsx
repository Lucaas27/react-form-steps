/* eslint-disable react/prop-types */
const Numbers = ({ step }) => {
  return (
    <div className="numbers">
      <div className={step >= 1 ? "active" : undefined}>1</div>
      <div className={step >= 2 ? "active" : undefined}>2</div>
      <div className={step >= 3 ? "active" : undefined}>3</div>
    </div>
  );
};

export default Numbers;
