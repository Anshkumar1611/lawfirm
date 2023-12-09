import Rounded from "../buttons/Rounded";
import PropTypes from "prop-types";

const WhyUs = ({ data }) => {
  return (
    <div className="lg:w-96 lg:h-96 max-w-sm bg-primary flex flex-col gap-6 border-2 px-6 py-7 rounded-xl border-whyusborder cursor-pointer hover:bg-gray">
      <div className="w-28 h-28 rounded-full bg-white flex justify-center items-center">
        <img src={data.url.gift} alt="why us" />
      </div>
      <h1 className="text-2xl font-semibold">{data.title}</h1>
      <p className="text-sm text-white opacity-30">{data.description}</p>
      <div className="flex justify-start items-center">
        <Rounded title="Read More" />
      </div>
    </div>
  );
};

WhyUs.propTypes = {
  data: PropTypes.object,
};

export default WhyUs;
