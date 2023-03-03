import {useNavigate} from 'react-router-dom'
import {useState, useEffect} from 'react'

function UserLanguages({user, lessons, setLessons, setLanguageSub}) {
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
  return (
    <div>
      {lessons.map((languages) => {
        return languages.languages.map((language, i) => {
          return (
            <div key={i}>
              <div onClick = {() => setSubSections(language)}>{language.language}</div>
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Flag_of_Germany_%28state%29.svg/350px-Flag_of_Germany_%28state%29.svg.png"/>
              <p> I told you so seb --nodoubt</p>
            </div>
          )
        })
      })}
    </div>
  )
}

export default UserLanguages;
