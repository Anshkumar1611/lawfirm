import { teams } from "../../data/data";
import TeamCard from "../common/cards/TeamCard";
import SectionHeading from "../common/sectionHeading/SectionHeading";

const OurTeam = () => {
  return (
    <div id="aboutUs">
      <div className="text-center">
        <SectionHeading heading="Our Team" />
      </div>
      <div className="flex flex-wrap justify-center items-center gap-8 gap-y-12 py-8 md:py-16 lg:py-24">
        {teams.map((team) => (
          <TeamCard key={team.id} data={team} />
        ))}
      </div>
    </div>
  );
};

export default OurTeam;
