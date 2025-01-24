import React from "react";

const Hero = () => {
  return (
    <section className="max-w-7xl mx-auto pt-12 px-4 flex flex-col items-center justify-center">
      <div className="flex flex-col items-center justify-center pt-8">
        <h1 className="text-6xl font-extrabold text-orange-950 tracking-tighter">
          Bolo Zubaan <span className="text-orange-50">Canceri</span>
        </h1>
        <p className="text-xl text-orange-950">
          more you eats, sooner you dies
        </p>
      </div>
    </section>
  );
};

export default Hero;
