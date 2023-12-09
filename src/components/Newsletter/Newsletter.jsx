const Newsletter = () => {
  return (
    <div className="flex justify-center items-center bg-gray h-80 w-full my-28">
      <div className="flex flex-col gap-8">
        <h1 className="font-helvetica text-3xl md:text-4xl lg:text-5xl text-center leading-relaxed px-4">
          Subscribe Our Newsletter
        </h1>
        <div className="flex flex-col gap-2 lg:flex-row px-4">
          <input
            name="name"
            type="text"
            placeholder="enter your name"
            className="focus:outline-none p-2 text-primary md:p-4 lg:rounded-l-lg"
          />
          <input
            name="email"
            type="email"
            placeholder="enter your email"
            className=" focus:outline-none text-primary p-2  md:p-4"
          />
          <button className="bg-secondary p-2  md:p-4 text-black font-semibold lg:rounded-r-lg">
            SEND
          </button>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
