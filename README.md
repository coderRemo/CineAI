# CineAI

![image](https://github.com/user-attachments/assets/26c7df69-caf6-45a0-b7c8-27b4e164e17f)

## Main Features:

- 🔗 Authentication
- 📜 Form Handling
- 🚀 Chat GPT API to search movies 📺

create-react-app has webpack bundler and jest in-built

## STEPS TAKEN TO SETUP APP-

## -- Section 1 -- The Beginning

1. Creating the App -> npx create-react-app netflix-gpt
2. Configure Tailwind CSS ->

   - npm install -D tailwindcss
   - npx tailwindcss init

3. Configure Routing ->

   - npm i -D react-router-dom

4. Login Form
5. Sign Up form on same existing form
   (\*\*NOTE:- FORMIK library(initially used for huge form) can be used to handle form validation - NOT USED HERE)
6. Form Validation (using useRef() Hook) & Error Message
7. Authentication
8. Firebase setup
9. Deploying app to production
10. Create SignUp user account (sign up / sign in)
11. Pushing User Object to REDUX STORE (userSlice)
12. Implemented Sign Out
13. Update Profile
14. BugFix:

    - Sign Up user displayName and profile picture update
    - if the user is not logged in Redirect '/browse' to Login Page and vice-versa

## -- Section 2 --Building the Core

15. Unsubscribed to the onAuthStateChanged Callback
16. Adding constants file to the project for hardcoded values
17. Register TMDB API & create an app & get access token
18. Get data from TMDB now playing movies list API
19. Adding movie data to the REDUX STORE (movieSlice)
20. Creating CUSTOM HOOK (useNowPlayingMovies)
21. Building Browse Page
    - STRUCTURE -
    - MainContainer
      - VideoBackground
      - VideoTitle
    - SecondaryContainer
      - MovieLists \* n
        - Cards \* n

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
