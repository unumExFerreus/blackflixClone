import Footer from "../components/Footer";
import Accordion from "../components/Accordion";
import "../App.css";
import {
  // bg,
  tv,
  v1,
  mobile,
  boxshot,
  downloadIcon,
  devicePile,
  videoDevices,
  kids,
} from "../_assets/_index";
// import { Link } from "react-router-dom";
// import Navbar from "../components/Navbar";

function IntroPage() {
  return (
    <div lang="en" dir="ltr" className="overflow-hidden">
      {/* <section
        aria-label="Hero"
        className="relative min-h-[31.5rem] lg:max-h-[43.75rem]"
      >
        <div>
          <div className="absolute top-0 right-0 w-full h-full bgGradient z-[-1]" />
          <div className="absolute top-0 right-0 w-full h-full bgGradient2 z-[-1]" />
        </div>
        <div>
          <img
            src={bg}
            alt="back Ground"
            className="bg-black absolute z-[-2] object-left object-cover w-full h-full scale-100 sm:scale-125 sm:translate-y-[-12.5%]"
          />
        </div>
        <section aria-label="Navbar" className="relative z-20">
          <Navbar />
        </section>
        <div className="flex min-h-[30rem] lg:min-h-[43.75rem] justify-center m-auto items-center sm:max-w-[calc(100%-4rem)] xl:max-w-[calc(83.3%-6rem)] xxl:max-w-[calc(66.6%-6rem)] select-none pt-[80px]">
          <div>
            <h1 className="text-white lg:text-[3rem] text-[2rem] fontb items-center text-center leading-tight">
              Unlimited movies, TV shows, and more
            </h1>
            <p className="text-white text-[1.125rem] fontm items-center text-center mt-[1rem] m-0 lg:text-[1.5rem] leading-none">
              Watch anywhere. Cancel anytime.
            </p>
            <div className="mt-[1.5rem] text-white text-[1.125rem] fontm items-center text-center m-0 lg:text-[1.25rem] max-w-[61.5rem] px-[1.5rem] mx-auto">
              <p className="px-2">
                Ready to watch? Enter your email to create or restart your
                membership.
              </p>
              <div className="sm:flex items-center mt-5 mx-auto max-w-xl">
                <input
                  type="email"
                  placeholder="Email address"
                  autoComplete="email"
                  className="w-full sm:w-2/3 bg-[#0f0f0fb0] placeholder:text-[#aaa] border-[1px] border-[#8C8C8C] h-[3rem] sm:h-[3.5rem] py-3 px-4 text-[1rem] rounded-[.25rem]"
                />
                <button className="fontb mt-4 sm:mt-0 min-w-fit w-full sm:w-1/3 sm:ml-2 bg-[#E50914] hover:bg-[#D00A13] duration-300 text-white h-[3rem] sm:h-[3.5rem] py-3 px-5 text-[1.3rem] rounded-[.25rem] leading-none">
                  <Link to="/signup"> Get Started</Link>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-2 absolute bottom-[-.5rem] bg-[#444] opacity-50"></div>
      </section> */}
      <section aria-label="Main content">
        <div className="bg-black z-0 select-none">
          <div className="lg:flex lg:flex-row h-full text-center lg:text-left min-h-[auto] py-14 lg:py-[4.5rem] justify-center m-auto items-center max-w-[calc(100%-3rem)] lg:max-w-[calc(100%-4rem)] xl:max-w-[calc(83.3%-6rem)] xxl:max-w-[calc(66.6%-6rem)]">
            <div className="lg:basis-1/2">
              <h2 className="w-full text-white text-[2rem] md:text-[3rem] fontb leading-[4rem]">
                Enjoy on your TV
              </h2>
              <p className="w-full text-white text-[1.125rem] md:text-[1.5rem] mt-4 fontl leading-[1.75rem]">
                Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV,
                Blu-ray players, and more.
              </p>
            </div>
            <div className="sm:basis-1/2 pl-[6px] relative">
              <img
                src={tv}
                alt="tv"
                className="relative w-full sm:w-[75%] mx-auto lg:w-full z-[3]"
              />
              <video
                src={v1}
                className="w-full h-full overflow-hidden z-[1] max-w-[74%] max-h-[54.6%] absolute top-[20.6%] left-[13.05%]"
                autoPlay
                loop
                muted
              />
            </div>
          </div>
          <div className="w-full h-2 absolute bg-[#444] opacity-50" />
        </div>
        <div className="bg-black select-none">
          <div
            dir="rtl"
            className="lg:flex lg:flex-row h-full text-center sm:text-left min-h-[auto] py-14 sm:py-[4.5rem] justify-center m-auto items-center max-w-[calc(100%-3rem)] sm:max-w-[calc(100%-4rem)] xl:max-w-[calc(83.3%-6rem)] xxl:max-w-[calc(66.6%-6rem)]"
          >
            <div dir="ltr" className="lg:basis-1/2">
              <h2 className="w-full text-white text-[2rem] md:text-[3rem] fontb leading-[2.5rem] sm:leading-[3.75rem]">
                Download your shows to watch offline
              </h2>
              <p className="w-full px-1 pb-6 text-white text-[1.125rem] md:text-[1.5rem] mt-4 fontl leading-[1.5rem] sm:leading-[1.75rem]">
                Save your favorites easily and always have something to watch.
              </p>
            </div>
            <div dir="ltr" className="lg:basis-1/2 relative">
              <div className="relative">
                <img
                  src={mobile}
                  alt="mobile"
                  className="w-full sm:w-[75%] mx-auto lg:w-full"
                />
                <div className="absolute flex overflow-hidden mx-auto bg-black items-center left-[50%] translate-x-[-50%] w-[55%] min-w-[17rem] min-h-[4rem] text-center rounded-xl border-[2px] border-[rgba(128,128,128,0.7)] shadow-md lg:py-2 lg:px-3 md:py-[.35rem] px-3 bottom-[8%] max-h-[26%]">
                  <div>
                    <img
                      src={boxshot}
                      alt="box shot"
                      className="w-full max-h-12 md:max-h-20 pr-4"
                    />
                  </div>
                  <div className="w-2/4 text-left">
                    <div className="text-white text-[0.875rem] sm:text-[1rem] fontb leading-[.85rem]">
                      Stranger Things
                    </div>
                    <div className="text-[#0071eb] text-[13px] sm:text-[14px]">
                      Downloading...
                    </div>
                  </div>
                  <div className="block ml-auto">
                    <img
                      alt="Download Icon"
                      src={downloadIcon}
                      className="max-h-[3.75rem]"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full h-2 absolute bg-[#444] opacity-50" />
        </div>
        <div className="bg-black z-0 select-none">
          <div className="lg:flex lg:flex-row h-full text-center lg:text-left min-h-[auto] py-14 lg:py-[4.5rem] justify-center m-auto items-center max-w-[calc(100%-3rem)] lg:max-w-[calc(100%-4rem)] xl:max-w-[calc(83.3%-6rem)] xxl:max-w-[calc(66.6%-6rem)]">
            <div className="lg:basis-1/2">
              <h2 className="w-full text-white text-[2rem] md:text-[3rem] fontb leading-[4rem]">
                Watch everywhere
              </h2>
              <p className="w-full text-white text-[1.125rem] md:text-[1.5rem] mt-4 fontl leading-[1.75rem]">
                Stream unlimited movies and TV shows on your phone, tablet,
                laptop, and TV.
              </p>
            </div>
            <div className="sm:basis-1/2 pl-[6px] relative">
              <img
                src={devicePile}
                alt="Device Pile"
                className="relative w-full sm:w-[75%] mx-auto lg:w-full z-[3]"
              />
              <video
                src={videoDevices}
                className="w-full h-full overflow-hidden z-[1] max-w-[63%] max-h-[46%] absolute top-[10.6%] left-[18.4%]"
                autoPlay
                loop
                muted
              ></video>
            </div>
          </div>
          <div className="w-full h-2 absolute bg-[#444] opacity-50" />
        </div>
        <div className="bg-black select-none">
          <div
            dir="rtl"
            className="lg:flex lg:flex-row h-full text-center sm:text-left min-h-[auto] py-14 sm:py-[4.5rem] justify-center m-auto items-center max-w-[calc(100%-3rem)] sm:max-w-[calc(100%-4rem)] xl:max-w-[calc(83.3%-6rem)] xxxl:max-w-[calc(66.6%-6rem)]"
          >
            <div dir="ltr" className="lg:basis-1/2">
              <h2 className="w-full text-white text-[2rem] md:text-[3rem] fontb leading-[2.5rem] sm:leading-[3.75rem]">
                Create profiles for kids
              </h2>
              <p className="w-full px-1 pb-6 text-white text-[1.125rem] md:text-[1.5rem] mt-4 fontl leading-[1.5rem] sm:leading-[1.75rem]">
                Send kids on adventures with their favorite characters in a
                space made just for them—free with your membership.
              </p>
            </div>
            <div dir="ltr" className="lg:basis-1/2 relative">
              <div className="relative">
                <img
                  alt="Kids"
                  src={kids}
                  className="w-full sm:w-[75%] mx-auto lg:w-full"
                />
              </div>
            </div>
          </div>
          <div className="w-full h-2 absolute bg-[#444] opacity-50" />
        </div>
      </section>
      <section aria-label="Accordion">
        <div className="bg-black w-full">
          <div className="flex flex-row h-full py-14 lg:py-[4.5rem] lg:justify-center m-auto items-center w-full sm:max-w-[calc(100%-4rem)] xl:max-w-[calc(83.3%-6rem)] xxxl:max-w-[calc(66.6%-6rem)]">
            <Accordion />
          </div>
        </div>
      </section>
      <footer>
        <div className="bg-black w-full">
          <div className="max-w-[calc(100%-3rem)] sm:max-w-[calc(100%-4rem)] xl:max-w-[calc(83.3%-6rem)] xxxl:max-w-[calc(66.6%-6rem)] mx-auto">
            <Footer />
          </div>
        </div>
      </footer>
    </div>
  );
}

export default IntroPage;
