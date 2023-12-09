import PropTypes from "prop-types";

const Accordion = ({ index, value, setValue }) => {
  const handleChange = (i) => {
    setValue((prevId) => (prevId === i ? null : i));
  };
  return (
    <button
      className="w-7 h-7 rounded-full bg-secondary flex justify-center items-center text-xl font-semibold text-primary"
      onClick={() => handleChange(index)}
    >
      {value === index ? "-" : "+"}
    </button>
  );
};

Accordion.propTypes = {
  index: PropTypes.number,
  value: PropTypes.array,
  setValue: PropTypes.func,
};

export default Accordion;
