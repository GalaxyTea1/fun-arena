import React, { useState } from "react";

const attractions = [
  {
    id: 1,
    name: "KARTING",
    image: "/src/assets/images/att1.png",
  },
  {
    id: 2,
    name: "JUMPARENA",
    image: "/src/assets/images/att2.png",
  },
  {
    id: 3,
    name: "VIRTUAL REALITY",
    image: "/src/assets/images/att3.png",
  },
  {
    id: 4,
    name: "MULTIBALL",
    image: "/src/assets/images/att4.png",
  },
  {
    id: 5,
    name: "LASER SHOOTING RANGE",
    image: "/src/assets/images/att5.png",
  },
  {
    id: 6,
    name: "COMPANY EVENTS",
    image: "/src/assets/images/att6.png",
  },
];

const Attractions = () => {
  const [selectedAttraction, setSelectedAttraction] = useState(2); // Mặc định chọn JUMPARENA

  const handleAttractionClick = (id) => {
    setSelectedAttraction(id);
  };

  return (
    <section className="py-16 bg-black">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold">OUR ATTRACTIONS</h2>
          <div className="text-sm text-gray-400 flex items-center">
            Multiple activities at Fun Arena Cheb
            <img
              src="/src/assets/images/arrow-col.png"
              alt="arrow-right"
              className="ml-4"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="space-y-4">
            {attractions.map((attraction) => (
              <div
                key={attraction.id}
                className={`group relative h-14 polygon-btn-att rounded-lg overflow-hidden cursor-pointer transition-all duration-300 ${
                  selectedAttraction === attraction.id
                    ? "bg-[#292929]/70 !w-[103%]"
                    : ""
                }`}
                onClick={() => handleAttractionClick(attraction.id)}
                style={{
                  backgroundImage: `url(${attraction.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div
                  className={`absolute w-full inset-0 flex items-center justify-end transition-all duration-300 ${
                    selectedAttraction === attraction.id
                      ? "bg-[#292929]/70 text-white"
                      : "bg-[#D9D9D9]/70 text-black"
                  }`}
                >
                  <h3 className="text-2xl mr-10">{attraction.name}</h3>
                </div>
              </div>
            ))}
          </div>
          <div className="w-full h-full relative z-10">
            <img src="/src/assets/images/att7.png" alt="attraction" />
            <button className=" absolute bottom-0 right-0 bg-white hover:bg-transparent hover:text-white hover:border-[1px] hover:border-white px-4 py-2 rounded-full text-black font-semibold text-sm">
              Find out more
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Attractions;
