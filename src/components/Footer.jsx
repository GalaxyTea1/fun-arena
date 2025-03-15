import React from "react";

const Footer = () => {
  return (
    <footer className="py-10 lg:py-20  border-t border-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row justify-between items-center mb-8 space-y-6 lg:space-y-0">
          <div className="mb-6 lg:mb-0 lg:w-1/4">
            <img
              src="/src/assets/images/logo-footer.png"
              alt="FUN Arena Logo"
              className="h-16 lg:h-24"
            />
          </div>

          <div className="text-gray-400 text-center lg:text-left max-w-sm mx-auto lg:mx-0 lg:w-1/3 px-4">
            <p className="mb-2">New entertainment centre FUN arena Cheb.</p>
            <p>
              You will find entertainment and sports{" "}
              <br className="hidden lg:block" /> activities for children and
              adults here.
            </p>
          </div>

          <div className="text-gray-400 text-center lg:text-right space-y-2 lg:w-1/4">
            <p>Potůčky 3, 350 02 Odrava</p>
            <p>fun@funarenacheb.cz</p>
            <p>+420737878891</p>
          </div>
        </div>

        <div className="pt-4 flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
          <div className="flex mb-4 lg:mb-0 bg-[#292929] rounded-full px-4 lg:px-5 py-2 space-x-3 lg:space-x-4">
            <img
              src="/src/assets/images/fb.png"
              alt="Facebook"
              className="h-5 lg:h-6 w-auto cursor-pointer"
            />
            <img
              src="/src/assets/images/ins.png"
              alt="Instagram"
              className="h-5 lg:h-6 w-auto cursor-pointer"
            />
            <img
              src="/src/assets/images/mail.png"
              alt="Email"
              className="h-5 lg:h-6 w-auto cursor-pointer"
            />
            <img
              src="/src/assets/images/phone.png"
              alt="Phone"
              className="h-5 lg:h-6 w-auto cursor-pointer"
            />
          </div>
          <div className="flex justify-center items-center">
            <div className="text-gray-400 text-center lg:text-right text-sm lg:text-base">
              <p>© 2025 FUN Arena Cheb. All rights Reserved.</p>
            </div>
            <button className="text-gray-400 hover:text-white transition-colors duration-300 ml-4 max-lg:absolute max-lg:right-6">
              <img
                src="/src/assets/images/up-btn.png"
                alt="Up"
                className="h-6 lg:h-8"
              />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
