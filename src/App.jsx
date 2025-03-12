import BannerSlider from "./components/BannerSlider";
import Registration from "./components/Registration";
import EntertainmentCenter from "./components/EntertainmentCenter";
import Attractions from "./components/Attractions";
import GiftVoucher from "./components/GiftVoucher";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <BannerSlider />
      <div className="relative h-6">
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 z-40 flex">
          <button className="font-bigShoulders relative z-10 left-2 polygon-reg-btn bg-[#0084FF] text-white uppercase text-3xl hover:bg-[#00A3FF] shadow-[0_-50px_100px_rgba(0,163,255,0.7)]">
            <span>Reserve</span>
          </button>
          <button className="font-bigShoulders polygon-reg-btn !min-w-[120px] bg-red-700 text-white uppercase text-3xl hover:bg-red-600 shadow-[0_30px_100px_rgba(220,38,38,0.7)]">
            <span>Now!</span>
          </button>
        </div>
      </div>
      <div className="relative">
        <Registration />
        <EntertainmentCenter />
        <div className="absolute top-[22rem] left-[23rem] transform -translate-x-1/2 z-40 flex">
          <img src="/src/assets/images/floating-logo.png" alt="FUN" />
        </div>
      </div>

      <Attractions />
      <GiftVoucher />
      <Footer />
    </div>
  );
}

export default App;
