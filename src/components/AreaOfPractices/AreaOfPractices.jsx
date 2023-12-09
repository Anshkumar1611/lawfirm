import {
  businessLaw,
  businessLaw2,
  elderAbuse,
  landLordDisputes,
  partnerShipLaw,
  realEstateLaw,
} from "../../assets";
import SectionHeading from "../common/sectionheading/SectionHeading";
import WhyUs from "../common/texts/WhyUs";

const AreaOfPractices = () => {
  return (
    <section id="practiceArea">
      <div className="text-center">
        <SectionHeading heading="Area of Practices" />
      </div>
      <div className="flex flex-wrap justify-center items-center md:grid grid-cols-3 gap-8 my-28">
        <div className="md:col-span-2 relative ">
          <img
            src={businessLaw}
            className="w-80 h-80 md:w-full object-cover rounded-lg hover:brightness-50 cursor-pointer"
          />
          <WhyUs content="BUSINESS LAW" />
        </div>
        <div className="relative">
          <img
            src={partnerShipLaw}
            className="w-80 h-80 md:w-full object-cover rounded-lg hover:brightness-50 cursor-pointer"
          />
          <WhyUs content="Partnership LAW" />
        </div>
        <div className="relative">
          <img
            src={realEstateLaw}
            className="w-80 h-80 md:w-full object-cover rounded-lg hover:brightness-50 cursor-pointer"
          />
          <WhyUs content="REAL ESTATE LAW" />
        </div>
        <div className="md:col-span-2 relative">
          <img
            src={businessLaw2}
            className="w-80 h-80 md:w-full object-cover rounded-lg hover:brightness-50 cursor-pointer"
          />
          <WhyUs content="BUSINESS LAW" />
        </div>
        <div className="md:col-span-2 relative">
          <img
            src={landLordDisputes}
            className="w-80 h-80  md:w-full object-cover rounded-lg hover:brightness-50 cursor-pointer"
          />
          <WhyUs content="LANDLORD DISPUTES" />
        </div>
        <div className="relative">
          <img
            src={elderAbuse}
            className="w-80 h-80 md:w-full object-cover rounded-lg hover:brightness-50 cursor-pointer"
          />
          <WhyUs content="ELDER ABUSE" />
        </div>
      </div>
    </section>
  );
};

export default AreaOfPractices;
