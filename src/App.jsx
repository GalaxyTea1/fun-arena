import BannerSlider from "./components/BannerSlider";
import Registration from "./components/Registration";
import EntertainmentCenter from "./components/EntertainmentCenter";
import Attractions from "./components/Attractions";
import GiftVoucher from "./components/GiftVoucher";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-scree text-white">
      <BannerSlider />
      <div className="relative h-12 bg-gradient-to-r from-[#1a1a1a]/90 to-[#5e5e5e] via-[#3b3b3b]/80 ">
        <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 z-40 flex">
          <button className="font-bigShoulders max-xl:!px-[20px] max-xl:!py-[10px] max-xl:min-w-[150px] max-xl:!text-2xl relative z-10 left-2 polygon-reg-btn bg-[#0084FF] text-white uppercase text-3xl hover:bg-[#00A3FF] shadow-[0_-60px_100px_rgba(0,163,255,0.7)]">
            <span>Reserve</span>
          </button>
          <button className="font-bigShoulders polygon-reg-btn !min-w-[120px] max-xl:!px-[20px] max-xl:!py-[10px] max-xl:min-w-[90px] bg-red-700 text-white uppercase text-3xl hover:bg-red-600 shadow-[0_40px_100px_rgba(220,38,38,0.7)]">
            <span>Now!</span>
          </button>
        </div>
      </div>
      <div className="relative">
        <Registration />
        <EntertainmentCenter />
        <div className="absolute top-[22rem] left-[23rem] transform -translate-x-1/2 z-40 flex">
          <img src="/images/floating-logo.png" alt="FUN" />
        </div>
      </div>

      <Attractions />
      <GiftVoucher />
      <Footer />
    </div>
  );
}

export default App;
