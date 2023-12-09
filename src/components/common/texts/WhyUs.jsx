import PropTypes from "prop-types";

const WhyUs = ({ content }) => {
  return <h1 className="font-semibold text-2xl absolute left-1/2 transform -translate-x-1/2 bottom-8">{content}</h1>;
};

WhyUs.propTypes = {
  content: PropTypes.string.isRequired,
};

export default WhyUs;
