# CineAI

![image](https://github.com/user-attachments/assets/26c7df69-caf6-45a0-b7c8-27b4e164e17f)

## Main Features:

- 🔗 Authentication
- 📜 Form Handling
- 🚀 OpenAI API to search movies 📺

create-react-app has webpack bundler and jest in-built

## STEPS TAKEN TO SETUP APP-

## -- Section 1 -- The Beginning

- Creating the App -> npx create-react-app netflix-gpt
- Configure Tailwind CSS ->

  - npm install -D tailwindcss
  - npx tailwindcss init

- Configure Routing ->

  - npm i -D react-router-dom

- Login Form
- Sign Up form on same existing form
  (\*\*NOTE:- FORMIK library(initially used for huge form) can be used to handle form validation - NOT USED HERE)
- Form Validation (using useRef() Hook) & Error Message
- Authentication
- Firebase setup
- Deploying app to production
- Create SignUp user account (sign up / sign in)
- Pushing User Object to REDUX STORE (userSlice)
- Implemented Sign Out
- Update Profile
- BugFix:

  - Sign Up user displayName and profile picture update
  - if the user is not logged in Redirect '/browse' to Login Page and vice-versa

## -- Section 2 --Building the Core

- Unsubscribed to the onAuthStateChanged Callback
- Adding constants file to the project for hardcoded values
- Register TMDB API & create an app & get access token
- Get data from TMDB now playing movies list API
- Adding movie data to the REDUX STORE (movieSlice)
- Creating CUSTOM HOOK (useNowPlayingMovies)
- Building Browse Page

  - STRUCTURE -
  - MainContainer
    - VideoBackground
    - VideoTitle
  - SecondaryContainer
    - MovieLists \* n
      - Cards \* n

- Creating CUSTOM HOOK for Trailer Videos (useTrailerVideos) - to Fetch Data for Trailer Video
- Update Store with Trailer Videos Data
- Embedded YouTube video and make it Autoplay and Mute
- Build Secondary Component
- Built MovieList
- Built MovieCard
- CUSTOM HOOK (usePopularMovies)

## -- Section 3 --Wrapping Up

- GPT recommendation system (search feature)
- multi-language feature in app
- working with OpenAI API key
- GPT Search API call
- Memoization
- Responsive Site

## FEATURES-

- Login/Sign Up
  - Sign In/Sign Up Form
  - Redirect to Browse Page
- Browse (after Authentication)
  - Header
  - Main Movie
    - Trailer in Background
    - Title & Description
    - Movie Suggestions
      - MovieLists \* n
- NetflixGPT
  - Search Bar
  - Movie Suggestions
