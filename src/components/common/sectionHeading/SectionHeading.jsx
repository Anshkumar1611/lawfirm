import PropTypes from "prop-types";

const SectionHeading = ({ heading }) => {
  return <h1 className="text-5xl font-semibold pt-14 leading-relaxed">{heading}</h1>;
};

SectionHeading.propTypes = {
  heading: PropTypes.string,
};
export default SectionHeading;
