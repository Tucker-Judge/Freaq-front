import {useNavigate} from 'react-router-dom'
import {useEffect} from 'react'
function LanguagePicker({user, userLanguages, setUserLanguages}){
const navigate = useNavigate()
// the users languages
// i want all languages displayed
// a continue where you left off
// const [userLanguages, setUserLanguages] = useState([])
// useEffect(() => {
   
//     const fetchData = async() => {
//       try {
//         const response = await fetch('/languages');
//         console.log(response)
//         const data = await response.json();
//         console.log(data)
//         setUserLanguages(data);
//         console.log(userLanguages);
//       } catch (error) {
//         console.error(error);
//       }
//     };
//     fetchData();

//   }, [userLanguages]);
useEffect(() => {
    // fetch index of languages
    fetch('/languages')
      .then((res) => {
        console.log(res.json)
        if (res.ok) {
          res.json().then((data) => setUserLanguages(data))
          console.log(userLanguages)
        } 
        else {
          setUserLanguages(null);
        }
      });
  }, []);
// useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch('/languages');
//         if (!response.ok) {
//           throw new Error(`HTTP error! Status: ${response.status}`);
//         }
//         const data = await response.json();
//         setUserLanguages(data);
//         console.log(data);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     };
//     fetchData();
//   }, []);
  
  

// post user_id, language_id
function handleGroup(lang_id){
  fetch("/lessons",{
    // posting languages user wants to study
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({
          "user_id": user.id,
          "language_id": lang_id,
          
      })
  })
  .then(req => {
      if(req.ok){
          req.json().then((session) => {
            
              console.log(session)
              navigate("/")
          })
      }
      else{
          req.json().then((session) => {
              console.log(session.error)
          })
      }
  })
}

return (
  <div >
 {userLanguages.map((language) => {
    return (
    <div onClick = {() => handleGroup(language.id)} key={language.id}>
        
       
        {/* {console.log(language.languages.charAt(0).toUpperCase())} */}
      <div>{language.language}</div>
      <img src = "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Flag_of_Germany_%28state%29.svg/350px-Flag_of_Germany_%28state%29.svg.png"/>
      <p> I told you so seb</p>
    </div>
        )
})}
      {/* <button onClick={() => navigate('/continue')}>Continue where you left off</button> */}
    {/* continue to study session after previous */}
    </div>
  )
}


export default LanguagePicker;