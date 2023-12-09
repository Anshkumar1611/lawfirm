import { testimonials } from "../../data/data";
// import Previous from "../common/carousel/Previous";
// import Next from "../common/carousel/Next";
import TestimonialsCard from "../common/cards/TestimonialsCard";
import Carousel from "../common/carousel/Carousel";
import SectionHeading from "../common/sectionheading/SectionHeading";

const Testimonials = () => {
  return (
    <section className="relative">
      <div className="lg:flex justify-between items-end ">
        <div className="basis-1/3">
          <SectionHeading heading="What says our happy Clients" />
        </div>
        <div className="basis-1/3"></div>
        <div className="flex gap-4"></div>
      </div>
      <div className="py-24">
        <Carousel
          data={testimonials}
          renderComponent={(testimonials) => (
            <TestimonialsCard data={testimonials} />
          )}
        />
      </div>
    </section>
  );
};

export default Testimonials;
