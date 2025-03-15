import React from "react";

const EntertainmentCenter = () => {
  return (
    <section className="py-8 md:py-12 lg:py-16 ">
      <div className="container mx-auto px-4">
        <div className="">
          <div className="ml-4 sm:ml-8 md:ml-16 lg:ml-52 mb-8 md:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
              NEW ENTERTAINMENT <br className="hidden md:block" />{" "}
              <span className="md:hidden">CENTRE NEAR CHEB</span>
              <span className="hidden md:inline">CENTRE NEAR CHEB</span>
            </h2>
            <div className="flex flex-col md:flex-row md:justify-between md:items-end py-4 mt-6">
              <p className="text-base md:text-lg mb-4 md:mb-0">
                We have been entertaining children and adults{" "}
                <br className="hidden md:block" /> in western Bohemia for more
                than 10 years!
              </p>
              <span className="text-white font-bold flex items-center gap-2 mt-2 md:mt-0 cursor-pointer">
                Find more about us{" "}
                <img
                  src="/src/assets/images/arrow.png"
                  alt="arrow"
                  className="w-5 h-5"
                />
              </span>
            </div>
          </div>

          <div className="relative aspect-video w-full">
            <div className="absolute inset-0 cursor-pointer flex items-center justify-center">
              <img
                src="/src/assets/images/video.png"
                alt="video"
                className="max-w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EntertainmentCenter;
