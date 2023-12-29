/* eslint-disable react/prop-types */
const Description = ({ step, messages }) => {
  return (
    <div className="message">
      Step {step}: {messages[step - 1]}
    </div>
  );
};

export default Description;
