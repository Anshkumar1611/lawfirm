import PropTypes from "prop-types";

const Rounded = ({ title, valid }) => {
  return (
    <button className={`${valid && 'hidden md:flex w-1/3 md:p-6 '} bg-secondary shrink py-2.5 px-6 rounded-full text-black font-semibold`}>
      {title}
    </button>
  );
};

Rounded.propTypes = {
  title: PropTypes.string.isRequired,
  valid: PropTypes.bool,
};
export default Rounded;
