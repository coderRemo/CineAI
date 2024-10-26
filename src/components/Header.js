import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import logo from "../assets/logo.png";
import profileImage from "../assets/profile_img.png";
import notification from "../assets/bell_icon.svg";
import dropDown from "../assets/caret_icon.svg";
import Error from "./Error";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  console.log(user);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
        navigate(<Error />);
      });
  };

  return (
    <div className="fixed flex justify-between top-0 left-0 w-full px-8 py-2 bg-gradient-to-b from-black z-50">
      <div>
        <img className="w-32 md:w-40 lg:w-56" src={logo} alt="logo" />
      </div>

      {user && (
        <div className="flex items-center gap-[20px]">
          <img className="w-[20px] cursor-pointer" src={notification} alt="bell-icon" />
          <div className="relative flex items-center cursor-pointer gap-5 group">
            <img className="rounded-sm w-9" src={user?.photoURL || profileImage} alt="profile-image" />
            <img src={dropDown} alt="" />
            <div className="absolute top-[100%] right-0 w-[100px] px-6 py-2 max-w-max rounded-sm z-10 text-white bg-slate-900 hidden group-hover:block">
              <p onClick={handleSignOut} className="text-[13px] text-center hover:underline ">
                Sign Out
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
