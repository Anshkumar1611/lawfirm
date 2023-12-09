const IntroSection = () => {
  return (
    <section className="flex flex-col gap-8 md:flex md:flex-row justify-between items-center my-8 md:my-16 lg:my-28">
      <div className=" font-semibold text-5xl basis-1/3 leading-relaxed">
        Let’s Introduce Ourself
      </div>
      <div className="hidden md:flex bg-gray w-0.5 md:h-40"></div>
      <div className="md:hidden bg-gray w-full h-0.5 "></div>
      <div className="basis-1/3">
        <h1 className="font-semibold text-2xl mb-4">Criminal Lawyer</h1>
        <p className=" text-white opacity-30 ">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequatduis enim velit mollit Exercitation.
        </p>
      </div>
    </section>
  );
};

export default IntroSection;
