import { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const slides = [
  {
    id: 1,
    title: "GO-KARTS",
    subtitle: "EVERYDAY FUN FOR EVERYONE",
    description:
      "Enjoy an adrenaline ride in any weather. Outdoor track and indoor hall at a professional level with Sodi go-karts.",
    buttonText: "Find out more",
    image: "/src/assets/images/go-karts.jpg",
    phone: "+420737878891",
  },
  {
    id: 2,
    title: "JUMPARENA",
    subtitle: "EVERYDAY FUN FOR EVERYONE",
    description:
      "Jump, flip and have fun in our trampoline park. Perfect for all ages and fitness levels.",
    buttonText: "Find out more",
    image: "/src/assets/images/jumparena.png",
    phone: "+420737878891",
  },
  {
    id: 3,
    title: "Virtuální realita",
    subtitle: "EVERYDAY FUN FOR EVERYONE",
    description:
      "Experience the future of entertainment with our state-of-the-art virtual reality games.",
    buttonText: "Find out more",
    image: "/src/assets/images/vr.jpg",
    phone: "+420737878891",
  },
  {
    id: 4,
    title: "MULTIBALL",
    subtitle: "EVERYDAY FUN FOR EVERYONE",
    description:
      "Challenge your friends in our multiball arena with various ball games and activities.",
    buttonText: "Find out more",
    image: "/src/assets/images/multiball.jpg",
    phone: "+420737878891",
  },
  {
    id: 5,
    title: "LASEROVÁ STŘELNICE",
    subtitle: "EVERYDAY FUN FOR EVERYONE",
    description:
      "Test your aim and precision at our laser shooting range. Safe and fun for everyone.",
    buttonText: "Find out more",
    image: "/src/assets/images/laser.png",
    phone: "+420737878891",
  },
];

const BannerSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef(null);

  const handleSlideChange = (swiper) => {
    setActiveIndex(swiper.realIndex);
  };

  const handleDotClick = (index) => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideTo(index);
    }
  };

  return (
    <div className="relative h-[90vh] w-full overflow-hidden">
      {/* Header */}
      <div className="absolute top-0 left-0 right-0 z-30 flex justify-between items-center px-8 py-6">
        {/* Logo */}
        <div className="flex items-center cursor-pointer">
          <img
            src="/src/assets/images/logo.png"
            alt="Logo"
            className="w-28 h-auto"
          />
        </div>

        <div className="flex items-center space-x-4">
          <img
            src="/src/assets/images/language-icon.png"
            alt="Language Icon"
            className="w-6 h-6 cursor-pointer"
          />
          <img
            src="/src/assets/images/menu-icon.png"
            alt="Menu Icon"
            className="w-8 h-8 cursor-pointer"
          />
        </div>
      </div>

      <Swiper
        ref={swiperRef}
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 500000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        onSlideChange={handleSlideChange}
        className="h-full w-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id} className="relative">
            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent z-10"></div>

            {/* Background image */}
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${slide.image})` }}
            ></div>

            <div className="relative z-20 h-full flex flex-col justify-end items-center pb-4">
              <div className="pb-8 w-full">
                <div className="flex flex-col xl:flex-row justify-between w-full px-4 md:px-8 xl:px-[108px] items-end gap-8">
                  {/* Left side content */}
                  <div className="w-full xl:max-w-6xl">
                    <h1 className="font-stencil text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-4 tracking-wider uppercase">
                      {slide.title}
                    </h1>
                    <div className="flex flex-col sm:flex-row gap-4 mb-8 items-start sm:items-center">
                      <p className="text-base sm:text-lg max-w-[26rem]">
                        {slide.description}
                      </p>
                      <button className="polygon-btn h-12 sm:h-14 bg-transparent border-2 border-white hover:bg-white hover:opacity-90 hover:text-black text-white font-medium">
                        <span>{slide.buttonText}</span>
                      </button>
                    </div>
                  </div>

                  {/* Right side content */}
                  <div className="w-full xl:w-auto xl:max-w-lg relative">
                    {/* Flag icon - moved outside */}
                    <div className="w-20 h-20 sm:w-28 sm:h-28 absolute left-[-16px] sm:left-[-26px] top-[-40px] sm:top-[-56px] z-10">
                      <img
                        src="/src/assets/images/flag-icon.png"
                        alt="Flag"
                        className="w-full h-full object-contain"
                      />
                    </div>

                    {/* Content box */}
                    <div className="bg-black/30 backdrop-blur-sm pt-2 rounded-3xl border border-white/20 overflow-hidden">
                      <div className="flex items-end mb-4 sm:mb-6">
                        <p className="text-lg sm:text-xl md:text-2xl tracking-wider pl-16 sm:pl-20">
                          {slide.subtitle}
                        </p>
                      </div>

                      <div className="px-4 sm:px-6 pb-4 sm:pb-6">
                        <p className="text-base sm:text-lg line-clamp-3 sm:line-clamp-none">
                          A few kilometers from Cheb, we have built a new
                          entertainment centre{" "}
                          <span className="gradient-text">FUN Arena Cheb</span>{" "}
                          for you. You will find entertainment and sports
                          activities for children and adults here.
                        </p>
                        {/* <div className="text-base sm:text-lg rounded-tl-3xl rounded-tr-3xl rounded-br-3xl px-4 bg-black/30 backdrop-blur-sm pt-4">
                          A few kilometers from Cheb, we have built a new
                          entertainment centre for you. You will find
                          entertainment and sports activities for
                        </div>
                        <div className="text-base sm:text-lg pb-1 px-4 w-[377px] bg-black/30 backdrop-blur-sm rounded-br-[30px]">
                          children and adults here.
                        </div> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Phone number */}
              {slide.phone && (
                <div className="fixed bottom-4 right-4 sm:absolute sm:bottom-5 sm:right-8 z-50 bg-white backdrop-blur-sm rounded-full px-3 sm:px-4 py-2 flex items-center">
                  <span className="text-sm sm:text-base text-black font-medium">
                    {slide.phone}
                  </span>
                  <div className="w-7 h-7 sm:w-8 sm:h-8 ml-2 bg-red-600 rounded-full flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                </div>
              )}
              {/* {slide.phone && (
                <div className="fixed bottom-[20px] right-[64px] bg-[rgb(75 75 75)] pt-[30px] pl-[20px] rounded-[15px] flex items-center">
                  <span className="text-sm sm:text-base text-black font-bold invisible">
                    {slide.phone}
                  </span>
                  <div className="w-7 h-7 sm:w-8 sm:h-8 ml-2 bg-red-600 rounded-full flex items-center justify-center invisible">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                </div>
              )} */}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="absolute bottom-6 max-xl:left-[32px] left-[100px] right-0 z-30 flex justify-start">
        <div className="flex space-x-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`w-4 h-4 rounded-full transition-all duration-300 border border-white ${
                activeIndex === index ? "bg-white" : "bg-transparent"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BannerSlider;
