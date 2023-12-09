import { faqData, faqDescription } from "../../data/data";
import SectionHeading from "../common/sectionheading/SectionHeading";
import Accordion from "../common/accordion/Accordion";

const Faq = () => {
  return (
    <div>
      <SectionHeading heading="FAQ" />
      <div className="flex flex-col lg:flex lg:flex-row lg:gap-0 gap-8 ">
        <div className="lg:basis-1/2 lg:pr-24">
          <p className="text-lg leading-relaxed opacity-30">{faqDescription}</p>
        </div>
        <div className="lg:basis-1/2 lg:pr-24">
          {faqData?.map((data) => (
            <div key={data.index} className="pb-8">
              <Accordion data={data} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faq;
