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
    if (userLang) {
      setLanguageApp(userLang);
    }
    else {
      setLanguageApp("en-US")
    }
  }, []);
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
      element: <h1>{translations[languageApp][0]}</h1>
    },
    {
      path:"/login",
      element: 
      <div>
      <NavBar languageApp={languageApp}/>
      <Login setUser={setUser} user={user} />
      <Footer languageApp={languageApp} setLanguageApp={setLanguageApp}/>
      </div>
    },
    
    {
      path: "/",
      // element: <Home user={user}/>
      element: 
      <div>
        <NavBar languageApp={languageApp} user={user}/>
        <AboutUs languageApp={languageApp}/> 
        <Signup languageApp={languageApp}/>
        <Footer languageApp={languageApp} setLanguageApp={setLanguageApp}/>
      </div>
    },
    {
      path: "/addlanguages",
      element:
    <div>
          <NavBar languageApp={languageApp}/>
      <LanguagePicker user = {user} userLanguages={userLanguages} setUserLanguages={setUserLanguages}/>
      <Footer languageApp={languageApp} setLanguageApp={setLanguageApp}/>
    </div>
    },
      {
        path: "/languages",
        element: 
        <div>
          <NavBar languageApp={languageApp}/>
          <UserLanguages user = {user} lessons = {lessons}  setLessons = {setLessons} setLanguageSub = {setLanguageSub} setSelectedSet={setSelectedSet}/>
          <Footer languageApp={languageApp} setLanguageApp={setLanguageApp}/>
          </div>
      },
      {
        path: "/courses",
        element: 
        <div>
        <NavBar languageApp={languageApp}/>
        <Course languageApp = {languageApp} languageTitles = {languageTitles} setLanguageTitles={setLanguageTitles} languageSub = {languageSub} setFlashGet = {setFlashGet}/>
        <Footer languageApp={languageApp} setLanguageApp={setLanguageApp}/>
        </div>
      },
      {
        path: "/flashcards",
        element: 
        <div>
          <NavBar languageApp={languageApp}/>
          <Flashcard languageApp = {languageApp} flashGet = {flashGet} selectedSet={selectedSet} setSelectedSet={setSelectedSet}/>
          <Footer languageApp={languageApp} setLanguageApp={setLanguageApp}/>
          </div>
      },
      {
        path: "/flashcardset",
        element: 
        <div>
          <NavBar languageApp={languageApp}/>
          <FlashcardSet languageApp = {languageApp} selectedSet={selectedSet} setSelectedSet={setSelectedSet} user = {user}/>
          <Footer languageApp={languageApp} setLanguageApp={setLanguageApp}/>
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
const translations = {
  "en-US": ["404 not found"],
  "de-DE": ["404 nicht gefunden"],
  "fr-FR": ["404 non trouvé"],
  "cn": ["404 找不到页面"],
  "ja": ["404 ページが見つかりません"],
  "pl": ["404 nie znaleziono"],
  "es": ["404 no encontrado"],
  "ru": ["404 страница не найдена"],
  "pt-PT": ["404 página não encontrada"],
  "ko": ["404 페이지를 찾을 수 없습니다"],
  "it": ["404 pagina non trovata"],
  "tr": ["404 sayfa bulunamadı"],
  "nl": ["404 niet gevonden"],
  "sv": ["404 sidan kunde inte hittas"],
  "uk": ["404 сторінка не знайдена"],
  "ar": ["404 الصفحة غير موجودة"],
  "no": ["404 siden ble ikke funnet"],
  "fi": ["404 sivua ei löytynyt"],
  "da": ["404 siden blev ikke fundet"],
  "cs": ["404 stránka nenalezena"]
}
