import React from "react";
import language from "../utils/languageConstants";
import { useSelector } from "react-redux";

const AiSearchBar = () => {
  const languageKey = useSelector((store) => store.config.lang);
  // console.log(languageKey);

  return (
    <div className="pt-[10%]">
      <p className="text-center mb-2">
        Discover movies tailored to your taste—GPT makes finding your next favorite film as easy as a conversation.
      </p>

      <div className="flex justify-center">
        <form onSubmit={(e) => e.preventDefault()} className="w-1/2 grid grid-cols-12">
          <input
            className="p-4 m-4 col-span-9 rounded-md opacity-75 text-black"
            type="text"
            placeholder={language[languageKey].searchPlaceholder}
          />
          <button className="bg-red-600 px-4 py-2 rounded-md col-span-3 m-4 hover:bg-red-500 text-2xl">
            {language[languageKey].search}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AiSearchBar;
