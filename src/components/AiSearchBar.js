import React, { useRef } from "react";
import language from "../utils/languageConstants";
import { useDispatch, useSelector } from "react-redux";
import client from "../utils/openai";
import { API_OPTIONS } from "../utils/constant";
import { addGptMovies } from "../utils/searchSlice";

const AiSearchBar = () => {
  const dispatch = useDispatch();
  const languageKey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);

  const searchMovieTMDB = async (movie) => {
    const data = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${movie}&include_adult=false&language=en-US&page=1`,
      API_OPTIONS
    );
    const json = await data.json();

    return json.results; // this returns a Promise not a result
  };

  const handleGPTSearchClick = async () => {
    const gptQuery = `Act as a Movie Recommendation System and suggest some movies for the Query: ${searchText.current.value}. Only provide names of 5 movies, comma separated like the example result given ahead. Example: Singham Again, Furiosa: A Mad Max Saga, Jigra, Don, Sholay`;

    try {
      const gptResults = await client.chat.completions.create({
        messages: [{ role: "user", content: gptQuery }],
        model: "gpt-3.5-turbo",
      });

      const movieNames = (gptResults.choices[0]?.message?.content).split(",");
      const movieData = movieNames.map((movie) => searchMovieTMDB(movie)); // return array of Promises
      const movieResults = await Promise.all(movieData);

      dispatch(addGptMovies({ movieNames: movieNames, movieResults: movieResults }));
    } catch (error) {
      console.error("Error fetching OpenAI response:", error);
    }
  };

  return (
    <div className="pt-36 md:pt-[10%]">
      <p className="text-center mb-2 text-xs md:text-base mx-4">
        Discover movies tailored to your taste—GPT makes finding your next favorite film as easy as a conversation.
      </p>

      <div className="flex justify-center">
        <form onSubmit={(e) => e.preventDefault()} className="w-3/4 md:w-1/2 flex flex-col md:grid md:grid-cols-12">
          <input
            ref={searchText}
            className="p-4 m-4 col-span-9 rounded-md opacity-75 text-black text-xs md:text-base"
            type="text"
            placeholder={language[languageKey].searchPlaceholder}
          />
          <button
            onClick={handleGPTSearchClick}
            className="bg-red-600 px-4 py-2 rounded-md col-span-3 m-4 hover:bg-red-500 lg:text-2xl"
          >
            {language[languageKey].search}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AiSearchBar;
