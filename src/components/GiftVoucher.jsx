import React from "react";

const GiftVoucher = () => {
  return (
    <section className="py-6 sm:py-8 md:py-12 bg-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12 xl:px-28 relative">
        <div className="bg-gradient-to-r from-[#E30613] to-red-800 rounded-xl p-4 sm:p-6 flex flex-col lg:flex-row items-center justify-between">
          <div className="flex flex-col items-center lg:items-start relative pt-16 lg:pt-0 w-full lg:w-auto">
            <div className="w-28 h-28 sm:w-32 sm:h-32 lg:w-40 lg:h-40 absolute top-[-70px] left-1/2 lg:left-1 lg:top-[-35px] transform -translate-x-1/2 lg:translate-x-0">
              <img
                src="/src/assets/images/gift.png"
                alt="Gift"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="text-center lg:text-left lg:ml-44">
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-2 mt-2">
                Make somebody happy with a gift voucher
              </h3>
              <p className="text-white/80 text-sm sm:text-base max-w-md">
                The voucher is valid for all attractions, unforgettable
                experiences for children and adults
              </p>
            </div>
          </div>
          <div className="mt-6 lg:mt-0">
            <button className="lg:absolute right-14 bottom-12 max-xl:right-1 max-xl:bottom-12 bg-white text-black font-bold hover:bg-gray-100 transition-colors duration-300 px-4 sm:px-6 py-2.5 rounded-lg text-sm sm:text-base">
              Buy now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GiftVoucher;
