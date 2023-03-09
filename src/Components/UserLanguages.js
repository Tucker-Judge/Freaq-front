import {useNavigate} from 'react-router-dom'
import {useState, useEffect} from 'react'

function UserLanguages({user, lessons, setLessons, setLanguageSub, setSelectedSet}) {
  const navigate = useNavigate();


  useEffect(() => {
    fetch('/lessons')
      .then((res) => {
        if (res.ok) {
          res.json().then((data) => setLessons(data))
        } 
        else {
          setLessons([]);
        }
      });
  }, []);
function setSubSections(language){
  setLanguageSub(language)
  console.log(language)
  navigate('/courses')

}
 function handleContinue(id){
 
      // make an API request to fetch the set
      fetch(`/uncompleted/${id}`)
        .then((response) => response.json())
        .then((data) => {
          setSelectedSet(data);
          navigate('/flashcardset')
        })
        .catch((error) => console.error(error));

      
}
  return (
    <div className = "lesson-container">
      {lessons.map((languages) => {
        return languages.languages.map((language, i) => {
          return (
            <div key={i}>
              <div onClick = {() => setSubSections(language)}>{language.language}</div>
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Flag_of_Germany_%28state%29.svg/350px-Flag_of_Germany_%28state%29.svg.png"/>
              <p> I told you so seb --nodoubt</p>
              <button onClick = {() => handleContinue(language.id)}>Continue</button>
            </div>
          )
        })
      })}
    </div>
  )
}

export default UserLanguages;
