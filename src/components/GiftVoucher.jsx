import React from "react";

const GiftVoucher = () => {
  return (
    <section className="py-12 bg-black">
      <div className="container mx-auto px-28 relative">
        <div className="bg-gradient-to-r from-[#E30613] to-red-800 rounded-xl px-6 py-4 flex items-center justify-center">
          <div className="flex items-center">
            <div className="w-48 h-48 absolute top-[-55px] left-28">
              <img
                src="/src/assets/images/gift.png"
                alt="Gift"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="">
              <h3 className="text-2xl font-bold mb-2 mt-2">
                Make somebody happy with a gift voucher
              </h3>
              <p className="text-white/80">
                The voucher is valid for all attractions, unforgettable
                experiences for children and adults
              </p>
            </div>
          </div>
          <div className="absolute top-[30px] right-[60px]">
            <button className="bg-white text-black font-bold hover:bg-gray-100 transition-colors duration-300 px-6 py-2 rounded-lg">
              Buy now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GiftVoucher;
