import "../App.css";
import { useState } from "react";
import Navbar from "../components/Navbar";
import { bg } from "../!assets";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../Context/AuthContext";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { logIn } = UserAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await logIn(email, password);
      navigate("/movies");
    } catch (error) {
      console.log(error);
      setError(error.message);
    }
  };

  return (
    <div className="relative min-h-[100vh] bg-black md:bg-black/50">
      <div className="hidden sm:flex">
        <img
          src={bg}
          alt="back-ground"
          className="absolute z-[-2] object-left object-cover w-full h-full"
        />
      </div>
      <div className="relative z-20">
        <Navbar />
      </div>
      {/* HERO */}
      <div className="md:min-w-[380px] md:max-w-[450px] min-h-[550px] md:min-h-[660px] md:mb-[90px] md:pt-[60px] md:px-[68px] px-[5%] pb-[40px] md:mx-auto bg-black bg-opacity-75 select-none rounded-[4px]  md:mt-[86px] pt-[60px] ">
        <h1 className="flex fontb text-white text-[2rem] mb-[28px]">Sign In</h1>
        {error ? (
          <p className="bg-red-500 text-white p-[14px] mb-4">{error}</p>
        ) : null}
        <form onSubmit={handleSubmit}>
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Email or phone number"
            autoComplete="email"
            className="w-full text-white bg-[#333] mb-[1rem] px-5 placeholder:text-[#aaa] border-none h-[50px] text-[1rem] rounded-[.25rem]"
          />
          <input
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Password"
            autoComplete="email"
            className="w-full text-white bg-[#333] mb-[1rem] px-5 placeholder:text-[#aaa] border-none h-[50px] text-[1rem] rounded-[.25rem]"
          />
          <button className="w-full mt-[24px] mb-[12px] bg-[#E50914] hover:bg-[#D00A13] duration-300 text-white h-[50px] py-3 px-5 text-[1rem] rounded-[.25rem] leading-none">
            Sign In
          </button>
          <div className="flex text-[#b3b3b3] text-[.875rem] leading-none">
            <input
              className="bg-[#333] border-none rounded-sm mr-2"
              type="checkbox"
              name=""
              id=""
            />
            <p className="text-[#737373]">Remember me</p>
            <p className="ml-auto">Need help?</p>
          </div>
          <p className="flex mt-[1rem] md:mt-[4.5rem] pb-2 text-white font-medium ">
            <span className="text-[#737373] mr-1 font-normal">
              New to Netflix?
            </span>
            <Link to="/signup">Sign up now.</Link>
          </p>
          <p className="text-[#0071eb] text-[13px] leading-[1.15rem]">
            <span className="text-[#737373] mr-1">
              This page is protected by Google reCAPTCHA to ensure you're not a
              bot.
            </span>
            Learn more.
          </p>
        </form>
      </div>
      {/* FOOTER */}
      <div className="border-solid border-t-[1px] leading-none border-[#737373] flex md:hidden"></div>
      <footer>
        <div className="w-full bg-black bg-opacity-75 ">
          <div
            data-style="heading"
            className="text-[#737373] text-[1rem] mx-auto max-w-[90%] lg:max-w-[1000px] hover:underline pb-6 pt-8 "
          >
            <a href="#">Questions? Contact us.</a>
          </div>

          <ul
            className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 text-[#737373] text-[.875rem]
            mx-auto max-w-[90%] lg:max-w-[1000px] md:pb-[12.1rem]"
          >
            <li>
              <a
                role="link"
                data-uia="footer-link"
                className="hover:underline pb-[.75rem]"
                href="#"
              >
                FAQ
              </a>
            </li>
            <li>
              <a
                role="link"
                data-uia="footer-link"
                className="hover:underline pb-[.75rem] block"
                href="#"
              >
                Help Centre
              </a>
            </li>
            <li>
              <a
                role="link"
                data-uia="footer-link"
                className="hover:underline pb-[.75rem] block"
                href="#"
              >
                Netflix Shop
              </a>
            </li>
            <li>
              <a
                role="link"
                data-uia="footer-link"
                className="hover:underline pb-[.75rem] block"
                href="#"
              >
                Terms of Use
              </a>
            </li>
            <li>
              <a
                role="link"
                data-uia="footer-link"
                className="hover:underline pb-[.75rem] block"
                href="#"
              >
                Privacy
              </a>
            </li>
            <li>
              <a
                role="link"
                data-uia="footer-link"
                className="hover:underline pb-[.75rem] block"
                href="#"
              >
                Cookie Preferences
              </a>
            </li>
            <li>
              <a
                role="link"
                data-uia="footer-link"
                className="hover:underline pb-[.75rem] block"
                href="#"
              >
                Corporate Information
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default SignIn;
