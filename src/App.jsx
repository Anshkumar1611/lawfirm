import {
  AreaOfPractices,
  Faq,
  Footer,
  HeroSection,
  Navbar,
  Newsletter,
  OurTeam,
  Testimonials,
  WhyChooseUs,
} from "./components";

const App = () => {
  return (
    <div className="bg-primary text-white font-inter">
      <Navbar />
      <HeroSection />
      <div className="px-8 md:px-16 lg:px-36 py-2 md:py-4 lg:py-8 ">
        <WhyChooseUs />
        <AreaOfPractices />
        <Testimonials />
        <OurTeam />
        <Faq />
        <Newsletter />
      </div>
      <Footer />
    </div>
  );
};

export default App;
