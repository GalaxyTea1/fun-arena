import React from "react";

const EntertainmentCenter = () => {
  return (
    <section className="py-16 bg-black">
      <div className="container mx-auto px-4">
        <div className="">
          <div className="ml-52 mb-16">
            <h2 className="text-4xl md:text-5xl font-bold">
              NEW ENTERTAINMENT <br /> CENTRE NEAR CHEB
            </h2>
            <div className="flex justify-between items-end py-4 mt-6">
              <p className="text-lg">
                We have been entertaining children and adults <br /> in western
                Bohemia for more than 10 years!
              </p>
              <span className="text-white font-bold flex items-center gap-2">
                Find more about us{" "}
                <img src="/src/assets/images/arrow.png" alt="arrow" />
              </span>
            </div>
          </div>

          <div className="relative aspect-video">
            <div className="absolute cursor-pointer flex items-center justify-center">
              <img
                src="/src/assets/images/video.png"
                alt="video"
                className=""
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EntertainmentCenter;
