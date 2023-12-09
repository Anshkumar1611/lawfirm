import PropTypes from "prop-types";

const TeamCard = ({ data }) => {
  return (
    <div className="flex justify-center items-center gap-4 w-64 lg:w-96 lg:p-8 p-2 md:p-4 cursor-pointer hover:bg-secondary hover:text-primary rounded-xl">
      <div className="basis-1/4">
        <img src={data.url} alt="team"/>
      </div>
      <div className="basis-2/3">
        <h1 className="text-2xl">{data.name}</h1>
        <p className="text-sm opacity-30 ">{data.cases}</p>
      </div>
    </div>
  );
};
TeamCard.propTypes = {
  data: PropTypes.object,
};
export default TeamCard;
