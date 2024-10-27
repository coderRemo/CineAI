import logo from "../assets/logo.png";
import profileImage from "../assets/profile_img.png";
import notification from "../assets/bell_icon.svg";
import dropDown from "../assets/caret_icon.svg";
import facebook from "../assets/facebook_icon.png";
import instagram from "../assets/instagram_icon.png";
import twitter from "../assets/twitter_icon.png";
import youtube from "../assets/youtube_icon.png";
import playIcon from "../assets/play_icon.png";
import infoIcon from "../assets/info_icon.png";
import heroBanner from "../assets/hero_banner.jpg";

export const ASSETS = {
  logo,
  profileImage,
  notification,
  dropDown,
  facebook,
  instagram,
  twitter,
  youtube,
  playIcon,
  infoIcon,
  heroBanner,
};

export const LOGIN_BACKGROUND_IMAGE =
  "https://assets.nflxext.com/ffe/siteui/vlv3/74d734ca-0eab-4cd9-871f-bca01823d872/web/IN-en-20241021-TRIFECTA-perspective_2277eb50-9da3-4fdf-adbe-74db0e9ee2cf_large.jpg";

export const USER_PROFILE_IMAGE =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwnYnwftDUSjsQmLQvMBZ2pwDXhAJiIdfKvg&s";

export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmY2Y3MDEwOGVjN2ExZmQ5N2UwZDQxMmE2ZmI0ZWFhZSIsIm5iZiI6MTcyOTk1ODk3MC4wNTg5ODgsInN1YiI6IjY3MWQxMjdjYTRhYzhhNDMyYzVjNzI1NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.X6_8flfet09IoPYox-87Sbzr4Gc9VJ8AweIPz8TK0WU",
  },
};

export const NOW_PLAYING_MOVIES = "https://api.themoviedb.org/3/movie/now_playing?page=1";
