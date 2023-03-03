import './App.css';
import Login from './Components/Login';
import NavBar from './Components/Navbar';
import Signup from './Components/Signup';
// import Home from './Components/Home';
import Footer from './Components/Footer';
import LanguagePicker from './Components/LanguagePicker';
import Course from './Components/Course';
import AboutUs from './Components/AboutUs';
import Flashcard from './Components/Flashcard';
import UserLanguages from './Components/UserLanguages';
import FlashcardSet from './Components/FlashcardSet';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import {useState, useEffect} from 'react';


function App() {
  // website language
  const [languageApp, setLanguageApp] = useState("en-US")
  // user
  const [user, setUser] = useState([])




  useEffect(() => {
    let userLang = navigator.language || navigator.userLanguage;
    if (user && user.language) {
      setLanguageApp(user.language);
    } else {
      setLanguageApp(userLang);
    }
  }, [user]);
  // to implement this
  // 
  // i want them divisible by 10
  // display languages state
  // display join table titles state display titles like 1000 frequency words state
  // display flashcard titles + 10 state
  // cover_info first card
  // map through on first pass hear it and spell it
  // map through second pass hear it spell it without seeing it
  // map through third pass speak it

// what is a flashcard title for each ten so doesnt effect the table
// in one case i want a count
// in another i want specific titles
// adjectives - count
// nouns - count
// sentence structure


const [userLanguages, setUserLanguages] = useState([])
// post user languages into lesson
// fetch from lesson instead
const [languageTitles, setLanguageTitles] = useState([])
// setting the titles to display
const [lessons, setLessons] = useState([])
// setting user languages to learn
  
const [languageSub, setLanguageSub] = useState([])
// setting id of clicked title

const [flashGet, setFlashGet] = useState([])
// fetch flashcards and display in groups of 10

const [selectedSet, setSelectedSet] = useState(null);
  const router = createBrowserRouter([
  
    {
      path:"/*",
      element: <h1>404 not found</h1>
    },
    {
      path:"/login",
      element: 
      <div>
    <NavBar />
      <Login setUser={setUser} user={user} />
      <Footer languageApp={languageApp}/>
      </div>
    },
    
    {
      path: "/",
      // element: <Home user={user}/>
      element: 
      <div>
        <NavBar />
        <AboutUs /> 
        <Footer languageApp={languageApp}/>
      </div>
    },
    {
      path: "/addlanguages",
      element:
    <div>
      <NavBar />
      <LanguagePicker user = {user} userLanguages={userLanguages} setUserLanguages={setUserLanguages}/>
      <Footer languageApp={languageApp}/>
    </div>
    },
      {
        path: "/languages",
        element: 
        <div>
          <NavBar />
          <UserLanguages user = {user} lessons = {lessons}  setLessons = {setLessons} setLanguageSub = {setLanguageSub}/>
          <Footer languageApp={languageApp}/>
          </div>
      },
      {
        path: "/courses",
        element: 
        <div>
          <NavBar />
        <Course languageApp = {languageApp} languageTitles = {languageTitles} setLanguageTitles={setLanguageTitles} languageSub = {languageSub} setFlashGet = {setFlashGet}/>
        <Footer languageApp={languageApp}/>
        </div>
      },
      {
        path: "/flashcards",
        element: 
        <div>
          <NavBar />
          <Flashcard languageApp = {languageApp} flashGet = {flashGet} selectedSet={selectedSet} setSelectedSet={setSelectedSet}/>
          <Footer languageApp={languageApp}/>
          </div>
      },
      {
        path: "/flashcardset",
        element: 
        <div>
          <NavBar />
          <FlashcardSet languageApp = {languageApp} selectedSet={selectedSet} setSelectedSet={setSelectedSet}/>
          <Footer languageApp={languageApp}/>
          </div>
      }
  ]);
  
  //gets current language
  //return whatever the route is on
  return (
    <div className="App">
        <RouterProvider router={router} />
    </div>
  );
}

export default App;