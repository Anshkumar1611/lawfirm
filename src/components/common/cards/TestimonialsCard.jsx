import PropTypes from "prop-types";

const TestimonialsCard = ({ data }) => {
  return (
    <div className="w-full md:w-96 h-auto md:h-96 bg-primary flex flex-col items-center lg:items-start gap-6 border-2 px-6 py-7 rounded-xl border-whyusborder cursor-pointer hover:bg-gray">
      <div className="w-28 h-28 rounded-full bg-white flex justify-center items-center">
        <img src={data.url} alt={data.title} />
      </div>
      <h1 className="text-2xl font-semibold">{data.title}</h1>
      <p className="text-sm mt-[-14px] ">{data.subTitle}</p>
      <p className="text-sm text-center lg:text-left text-white opacity-30">{data.description}</p>
    </div>
  );
};

TestimonialsCard.propTypes = {
  data: PropTypes.object,
};

export default TestimonialsCard;
