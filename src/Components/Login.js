import React, { useState } from 'react';

import {useNavigate} from "react-router-dom"
function Login({user, setUser, languageApp}) {
  debugger
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate()
  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  function handleSubmit(e){
    e.preventDefault()
    fetch("/login",{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "username": username,
            "password": password
        })
    })
    .then(req => {
        if(req.ok){
            req.json().then((session) => {
                setUser(session)
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
    <div>
    <form onSubmit={handleSubmit}>
      <label>
      {translation[languageApp][0]}
        <input type="username" value={username} onChange={handleUsernameChange} />
      </label>
      <br />
      <label>
      {translation[languageApp][1]}
        <input type="password" value={password} onChange={handlePasswordChange} />
      </label>
      <br />
      <button type="submit">{translation[languageApp][2]}</button>
    </form>
    </div>
  );
}

export default Login;

const translation = {
  "en-US": ["Username:", "Password:", "Log in"],
  "de-DE": ["Nutzername:", "Passwort:", "Einloggen"],
  "fr-FR": ["Nom d'utilisateur:", "Mot de passe:", "Se connecter"],
  "zh-CN": ["用户名:", "密码:", "登录"],
  "ja-JP": ["ユーザー名:", "パスワード:", "ログイン"],
  "pl-PL": ["Nazwa użytkownika:", "Hasło:", "Zaloguj się"],
  "es-ES": ["Nombre de usuario:", "Contraseña:", "Iniciar sesión"],
  "ru-RU": ["Имя пользователя:", "Пароль:", "Войти"],
  "pt-PT": ["Nome de usuário:", "Senha:", "Entrar"],
  "ko-KR": ["사용자 이름:", "비밀번호:", "로그인"],
  "it-IT": ["Nome utente:", "Password:", "Accedi"],
  "tr-TR": ["Kullanıcı adı:", "Şifre:", "Giriş yap"],
  "nl-NL": ["Gebruikersnaam:", "Wachtwoord:", "Inloggen"],
  "sv-SE": ["Användarnamn:", "Lösenord:", "Logga in"],
  "uk-UA": ["Ім'я користувача:", "Пароль:", "Увійти"],
  "ar-SA": ["اسم المستخدم:", "كلمة السر:", "تسجيل الدخول"],
  "no-NO": ["Brukernavn:", "Passord:", "Logg inn"],
  "fi-FI": ["Käyttäjänimi:", "Salasana:", "Kirjaudu sisään"],
  "da-DK": ["Brugernavn:", "Adgangskode:", "Log ind"],
  "cs-CZ": ["Uživatelské jméno:", "Heslo:", "Přihlásit se"]
  };
  
  
  
  
  
  
