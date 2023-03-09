import {useNavigate} from 'react-router-dom'

function Navbar({languageApp, user}) {

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
        {translation[languageApp][0]}
        </div>
        <div onClick = {() => navigate('/addlanguages')} className = "nav-home">
        {translation[languageApp][1]}
        </div>
        
        
        <div onClick = {() => navigate('/login')} className = "login">
        {translation[languageApp][2]}
        </div>
        
    </div>
    )

}
export default Navbar;
const translation = {
    "en-US": ["My languages", "New Languages", "Login"],
    "de-DE": ["Meine Sprachen", "Neue Sprachen", "Anmelden"],
    "fr-FR": ["Mes langues", "Nouvelles langues", "Se connecter"],
    "cn": ["我的语言", "新语言", "登录"],
    "ja": ["私の言語", "新しい言語", "ログイン"],
    "pl": ["Moje języki", "Nowe języki", "Zaloguj się"],
    "es": ["Mis idiomas", "Nuevos idiomas", "Iniciar sesión"],
    "ru": ["Мои языки", "Новые языки", "Войти"],
    "pt-PT": ["Meus idiomas", "Novos idiomas", "Entrar"],
    "ko": ["내 언어", "새 언어", "로그인"],
    "it": ["Le mie lingue", "Nuove lingue", "Accedi"],
    "tr": ["Dillerim", "Yeni Diller", "Giriş yap"],
    "nl": ["Mijn talen", "Nieuwe talen", "Inloggen"],
    "sv": ["Mina språk", "Nya språk", "Logga in"],
    "uk": ["Мої мови", "Нові мови", "Увійти"],
    "ar": ["لغاتي", "لغات جديدة", "تسجيل الدخول"],
    "no": ["Mine språk", "Nye språk", "Logg inn"],
    "fi": ["Kieleni", "Uudet kielet", "Kirjaudu sisään"],
    "da": ["Mine sprog", "Nye sprog", "Log ind"],
    "cs": ["Moje jazyky", "Nové jazyky", "Přihlásit se"]
  };
  