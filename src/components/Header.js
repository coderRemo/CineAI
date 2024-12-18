import React, { useEffect, useState } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { ASSETS, SUPPORTED_LANG } from "../utils/constant";
import { clearGptMovies, toggleSearchView } from "../utils/searchSlice";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
  const [showLanguage, setShowLanguage] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const showSearch = useSelector((store) => store.search.showSearch);
  const user = useSelector((store) => store.user);

  const handleSignOut = () => {
    signOut(auth);
  };

  useEffect(() => {
    // Get the currently signed-in user
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in
        const { uid, email, displayName, photoURL } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName, photoURL: photoURL }));
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        dispatch(clearGptMovies());
        navigate("/");
      }
    });

    // Unsubscribe when component unmounts
    return () => unsubscribe();
  }, []);

  const handleGPTSearchClick = () => {
    // toggle Search
    dispatch(toggleSearchView());
    // navigate("/gptsearch");
  };

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  return (
    <div className="fixed flex justify-between top-0 left-0 w-full px-8 py-2 bg-gradient-to-b from-black z-50">
      <div className="flex items-center gap-12">
        <img className="w-32 md:w-40 lg:w-56" src={ASSETS.logo} alt="logo" />
        {user && (
          <>
            <ul className="flex list-none">
              {/* <li className="cursor-pointer">Home</li>
              <li className="cursor-pointer md:flex">{showSearch ? "Home" : "GPT Search"}</li>
              <li className="cursor-pointer hidden md:flex md:text-xs">TV Shows</li>
              <li className="cursor-pointer hidden md:flex">Movies</li>
              <li className="cursor-pointer hidden md:flex">New & Popular</li>
              <li className="cursor-pointer hidden md:flex text-xs md:text-base">TV Shows</li>
              <li className="cursor-pointer hidden md:flex">My List</li> */}
              {showSearch && (
                <li
                  className="cursor-pointer text-xs md:text-base lg:text-lg"
                  onClick={() => setShowLanguage((prev) => !prev)}
                >
                  Browse by Languages
                </li>
              )}
            </ul>

            {showLanguage && (
              <div className="relative md:static">
                <select
                  onChange={handleLanguageChange}
                  className="absolute md:static p-1 text-white bg-slate-900 top-5 md:top-0 right-9 md:right-0"
                >
                  {SUPPORTED_LANG.map((language) => (
                    <option key={language.identifier} value={language.identifier}>
                      {language.name}
                    </option>
                  ))}
                </select>
              </div>
            )}
          </>
        )}
      </div>

      {user && (
        <div onClick={handleGPTSearchClick} className="flex items-center gap-[20px]">
          {/* <button className="bg-purple-600 hover:bg-purple-500 rounded-md px-3 py-[5px]">GPT Search</button> */}
          <p className="cursor-pointer text-xs md:text-base lg:text-lg">{showSearch ? "Home" : "GPT Search"}</p>

          <img className="w-[20px] cursor-pointer" src={ASSETS.notification} alt="bell-icon" />

          <div className="relative flex items-center cursor-pointer gap-5 group">
            <p className="text-xs md:text-base lg:text-lg">{user?.displayName || "User"}</p>
            <img className="rounded-sm w-7 md:w-9" src={user?.photoURL || ASSETS.profileImage} alt="profile-image" />
            <img src={ASSETS.dropDown} alt="" />
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
