import { Link, useNavigate } from "react-router-dom";
import { logo } from "../_assets/_index";
import { UserAuth } from "../Context/AuthContext";

function Navbar() {
  const { user, logOut } = UserAuth();
  const navigate = useNavigate()

  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="relative">
      {user?.email ? (
        <div className="flex w-full justify-between absolute items-center h-[56px] px-[3%]">
          <Link to="/movies">
            <img className="block h-8" src={logo} alt="NETFLIX" />
          </Link>
          <div className="flex flex-row">
              <button
              onClick={handleLogout}
              className="flex items-center min-w-fit h-8 cursor-pointer select-none rounded-[2px] py-[16px] px-[17px] text-[14px] text-[#fff] bg-[#E50914] hover:bg-[#D00A13] duration-300 ml-2">
                <span className="leading-none font-medium ">Logout</span>
              </button>
          </div>
        </div>
      ) : (
        <div className="flex w-full justify-between absolute items-center h-[56px] px-[3%] ">
          <Link to="/">
            <img className="block h-8" src={logo} alt="NETFLIX" />
          </Link>
          <div className="flex flex-row">
            <Link to="/signin">
              <button className="flex items-center min-w-fit h-6 sm:h-8 cursor-pointer select-none rounded-[2px] py-[.875rem] sm:py-4 px-2 sm:px-[17px] text-[14px] text-[#fff] bg-[#E50914] hover:bg-[#D00A13] duration-300">
                <span className="leading-none font-medium ">Sign In</span>
              </button>
            </Link>
            <Link to="/signup">
              <button className="flex items-center min-w-fit h-6 sm:h-8 cursor-pointer select-none rounded-[2px] py-[.875rem] sm:py-4 px-2 sm:px-[17px] text-[14px] text-[#fff] bg-[#E50914] hover:bg-[#D00A13] duration-300 ml-1 sm:ml-2">
                <span className="leading-none font-medium ">Sign Up</span>
              </button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;
