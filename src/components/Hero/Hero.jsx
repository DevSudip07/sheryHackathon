import Content from "./Content";
import Image from "./Image";


const Hero = () => {
  return (
    <>
      <section className="relative w-full h-[calc(100vh-72px)] md:px-10">
        <figure className="container mx-auto md:w-[90%] h-full">
          <h1 className="relative text-[14rem] text-gray-400 leading-none font-bold tracking-[8rem] before:absolute before:w-[15rem] before:h-[200px] before:right-0 before:top-0 before:bg-linear-to-r before:from-transparent before:to-[var(--bgColor)] after:absolute after:w-[15rem] after:h-[200px] after:left-0 after:top-0 after:bg-linear-to-l after:from-transparent after:to-[var(--bgColor)] select-none z-10">
            <span className="text-[var(--primaryColor)]">D</span>O<span className="text-[var(--primaryColor)]">P</span>E<span className="text-[var(--primaryColor)]">S</span>
          </h1>
          <div className="container mx-auto absolute inset-0 w-[90%] h-full flex items-center md:px-10 z-10">
            <Content />
            <Image />
          </div>
        </figure>
      </section>
    </>
  );
};

export default Hero;