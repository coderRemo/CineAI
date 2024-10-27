import logo from "../assets/logo.png";
import profileImage from "../assets/profile_img.png";
import notification from "../assets/bell_icon.svg";
import dropDown from "../assets/caret_icon.svg";

export const ASSETS = { logo, profileImage, notification, dropDown };

export const LOGIN_BACKGROUND_IMAGE =
  "https://assets.nflxext.com/ffe/siteui/vlv3/74d734ca-0eab-4cd9-871f-bca01823d872/web/IN-en-20241021-TRIFECTA-perspective_2277eb50-9da3-4fdf-adbe-74db0e9ee2cf_large.jpg";

export const USER_PROFILE_IMAGE =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwnYnwftDUSjsQmLQvMBZ2pwDXhAJiIdfKvg&s";

export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${process.env.API_AUTH_TOKEN}`,
  },
};

export const NOW_PLAYING_MOVIES = `${process.env.NOW_PLAYING_URL}?page=1`;
