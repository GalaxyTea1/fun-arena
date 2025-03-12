import React from "react";

const Registration = () => {
  return (
    <section className="pt-32 pb-16 bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-12">REGISTRATION</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <p className="text-lg mb-6">
              For organizational and security reasons, every visitor to the FUN
              arena Cheb must register before entering the attraction. At the
              reception, your registration will be completed and you will
              receive a loyalty card for you, which will use for your
              activities.
            </p>
          </div>

          <div className="space-y-16">
            {/* Step 1 */}
            <div className="flex mb-28">
              <div className="flex-shrink-0 mr-6">
                <div className="w-14 h-12 flex items-center justify-center text-3xl font-bold">
                  <img
                    src="/src/assets/images/reg1.png"
                    alt="Registration 1"
                    className="w-14 h-12"
                  />
                </div>
              </div>
              <div>
                <div className="polygon-btn-title">
                  <h3 className="text-xl font-semibold skew-x-[20deg]">
                    Choose an Attraction
                  </h3>
                </div>

                <p className="text-gray-300 ml-3 mt-3">
                  Choose from the attractions at the FUN arena.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex">
              <div className="flex-shrink-0 mr-6">
                <div className="w-14 h-12 flex items-center justify-center text-3xl font-bold">
                  <img
                    src="/src/assets/images/reg2.png"
                    alt="Registration 2"
                    className="w-14 h-12"
                  />
                </div>
              </div>
              <div className="flex items-center">
                <div>
                  <div className="polygon-btn-title flex justify-between items-center relative">
                    <h3 className="text-xl font-semibold skew-x-[20deg]">
                      Register
                    </h3>
                    <button className="bg-red-600 w-24 text-white px-1 py-1 rounded-xl text-xs font-bold skew-x-[20deg] mr-32">
                      Click here
                    </button>
                    <div className="absolute right-0 top-3 skew-x-[20deg]">
                      <img
                        src="/src/assets/images/qr-code.png"
                        alt="QR Code"
                        className="w-full h-full"
                      />
                    </div>
                  </div>
                  <p className="text-gray-300 ml-3 mt-3">
                    You can register at the reception or by <br /> clicking the
                    button above from the comfort of <br /> your home.
                  </p>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex">
              <div className="flex-shrink-0 mr-6">
                <div className="w-14 h-12 flex items-center justify-center text-3xl font-bold">
                  <img
                    src="/src/assets/images/reg3.png"
                    alt="Registration 3"
                    className="w-14 h-12"
                  />
                </div>
              </div>
              <div>
                <div className="polygon-btn-title">
                  <h3 className="text-xl font-semibold skew-x-[20deg]">
                    Have Fun
                  </h3>
                </div>
                <p className="text-gray-300 ml-3 mt-3">
                  Arrive with your confirmation, receive your loyalty card from
                  us, go to your chosen attraction and have fun. We look forward
                  to your visit!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Registration;
