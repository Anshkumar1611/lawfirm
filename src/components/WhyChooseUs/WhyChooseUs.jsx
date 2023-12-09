import { whyUsData } from "../../data/data";
import IntroSection from "../IntroSection/IntroSection";
import WhyUs from "../common/cards/WhyUs";
import SectionHeading from "../common/sectionHeading/SectionHeading";

const WhyChooseUs = () => {
  return (
    <div id="whyUs">
      <IntroSection />
      <div className="text-center">
        <SectionHeading heading="Why Choose Us?" />
      </div>
      <div className="flex flex-wrap justify-between gap-8 py-24">
        {whyUsData.map((data) => (
          <WhyUs data={data} key={data.id} />
        ))}
      </div>
    </div>
  );
};

export default WhyChooseUs;
