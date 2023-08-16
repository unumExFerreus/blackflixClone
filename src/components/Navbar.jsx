import { logo } from "../assets/index";

function Navbar() {
  return (
    <div className="flex items-center mx-auto h-[86px] xs:max-w-[calc(100%-4rem)] xl:max-w-[calc(83.3%-6rem)] ">
      <div className="flex w-full">
        <img
          className="flex justify-start h-[1.5rem] lg:h-[2.5rem] "
          src={logo}
          alt="logo"
        />
      </div>
      <a
        role="button"
        className="flex items-center min-w-fit h-[32px] cursor-pointer select-none rounded-[4px] py-[6px] px-[16px] text-[14px] text-[#fff] bg-[#E50914] hover:bg-[#D00A13]"
      >
        <span className="leading-[0px] font-bold">Sign In</span>
      </a>
    </div>
  );
}

export default Navbar;
