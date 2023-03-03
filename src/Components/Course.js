//display all flashcards
import {useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom'


function Course({languageApp, languageTitles, setLanguageTitles,languageSub, setFlashGet}){
const navigate = useNavigate()
// debugger
//get language of user by browser in creation of user
// update with change on flag thing
// if no user set website language to browser language
useEffect(() => {
//     // const flash_params = new URLSearchParams({back: languageApp})
    fetch(`language_flashcards/${languageSub.id}`)
    //grab session language
      .then((res) => {
        console.log(res.json)
        if (res.ok) {
          res.json().then((data) => setLanguageTitles(data))
        } 
        else {
          setLanguageTitles(null);
        
        }
      });
  }, []);

// console.log(language)
// console.log(userLanguages)
// console.log(userLanguages.title)
// const handleClick = (index) => {
//     setUserLanguages([userLanguages[index]]);
//     navigate(`/flashcards`);
//   };
function flashcardGame(sub){
  setFlashGet(sub)
  console.log(sub)
  navigate('/flashcards')
}


return (
  <div>
    {languageTitles.flatMap((subs) => subs).map((sub) => {
      return (
          <div key={sub.id}>
            <div onClick = {()=> flashcardGame(sub)}>{sub.title[0]}</div>
    
            <p> I told you so seb --nodoubt</p>
          </div>
      
      )
    })}
  </div>
)

      

}

export default Course