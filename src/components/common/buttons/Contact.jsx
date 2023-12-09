import PropTypes from "prop-types";

const Contact = ({ title }) => {
  return (
    <button className="border-2 font-semibold leading-5 px-4 py-2 hover:text-secondary ">
      {title}
    </button>
  );
};
Contact.propTypes = {
  title: PropTypes.string,
};

export default Contact;
