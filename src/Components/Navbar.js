import {useNavigate} from 'react-router-dom'

function Navbar({user}) {

const navigate = useNavigate()

//    function Home() {
//     navigate("/courses")
//    }
//    function Languages() {
//     navigate("/languages")
//    }
//    function Courses() {
//     navigate("/")
//    }
//    function Login() {
//     navigate("/login")
//    }

    return (
    <div className = "navbar"> 
        <div className = "nav-logo">
      
       
            <img onClick = {() => navigate('/')} src= "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJYctcCNdEo8tPvMXckYVI7kehiKtMd6sBRQ&usqp=CAU" />
            
            
        </div>
        <div className = "nav-name">
        <h1>Freaqy</h1>
        </div>
        <div onClick = {() => navigate('/languages')}className = "nav-courses">
            {/* navigate(/Courses) */}
            My languages
        </div>
        <div onClick = {() => navigate('/addlanguages')} className = "nav-home">
            New Languages
        </div>
        
        
        <div onClick = {() => navigate('/login')} className = "login">
            Login
        </div>
        
    </div>
    )

}
export default Navbar;