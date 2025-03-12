import React from "react";

const Footer = () => {
  return (
    <footer className="py-20 bg-black border-t border-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="mb-6 md:mb-0">
            <img
              src="/src/assets/images/logo-footer.png"
              alt="FUN Arena Logo"
              className="h-24"
            />
          </div>

          <div className="text-gray-400 text-center md:text-left">
            <p>New entertainment centre FUN arena Cheb.</p>
            <p>
              You will find entertainment and sports <br /> activities for
              children and adults here.
            </p>
          </div>

          <div className="text-gray-400 text-center md:text-right space-y-2">
            <p>Potůčky 3, 350 02 Odrava</p>
            <p>fun@funarenacheb.cz</p>
            <p>+420737878891</p>
          </div>
        </div>

        <div className="pt-4 flex flex-col md:flex-row justify-between items-center">
          <div className="flex mb-4 md:mb-0 bg-[#292929] rounded-full px-5 py-2 space-x-2">
            <img
              src="/src/assets/images/fb.png"
              alt="Facebook"
              className="h-6"
            />
            <img
              src="/src/assets/images/ins.png"
              alt="Instagram"
              className="h-6"
            />
            <img
              src="/src/assets/images/mail.png"
              alt="Email"
              className="h-6"
            />
            <img
              src="/src/assets/images/phone.png"
              alt="Phone"
              className="h-6"
            />
          </div>
          <div className="flex flex-col md:flex-row items-center">
            <div className="text-gray-400 text-center md:text-right mb-4 md:mb-0 md:mr-4">
              <p>© 2025 FUN Arena Cheb. All rights Reserved.</p>
            </div>
            <button className="text-gray-400 hover:text-white transition-colors duration-300">
              <img
                src="/src/assets/images/up-btn.png"
                alt="Up"
                className="h-8"
              />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
