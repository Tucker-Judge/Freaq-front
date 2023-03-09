import React, { useState } from 'react';

function SignupForm({languageApp}) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [password_confirmation, setPasswordConfirmation] = useState('');
  const [email, setEmail] = useState('');
  const [langCode, setLangCode] = useState(languageApp);
  
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch('/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password, password_confirmation, email, lang_code: langCode }),
      });
      const data = await response.json();
      console.log(data);
      // handle successful signup
    } catch (error) {
      console.error(error);
      // handle error
    }
  };

  return (
    <form onSubmit={handleSubmit} className="login-form">
      <label className="form-label">
        {translation[languageApp][0]}
        <input className="form-input" type="username" value={username} onChange={(e) => setUsername(e.target.value)} />
      </label>
      <br />
      <label className="form-label">
        {translation[languageApp][1]}
        <input className="form-input" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </label>
      <br />
      <label className="form-label">
        {translation[languageApp][2]}
        <input className="form-input" type="password" value={password_confirmation} onChange={(e) => setPasswordConfirmation(e.target.value)} />
      </label>
      <br />
      <label className="form-label">
        {translation[languageApp][3]}
        <input className="form-input" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </label>
      <label className="form-label">
        {translation[languageApp][5]}
        <select className="form-select" placeholder = {translation[languageApp][6]}value={langCode} onChange={(e) => setLangCode(e.target.value)}>
          <option key = "whatever" value={translation[languageApp]}>{translation[languageApp][6]}</option>
          {Object.entries(translation).map(([lang, values]) => (
            <option  key={lang} value={lang}>{values[6]}</option>
          ))}
        </select>
      </label>
      <br />
      <button className="form-button" type="submit">{translation[languageApp][4]}</button>
    </form>
  );
  
}

export default SignupForm;


const translation = {
  "en-US": ["Username:", "Password:", "Password Confirmation:", "Email:", "Sign up", "First Language", "English"],
  "de-DE": ["Benutzername:", "Passwort:", "Passwortbestätigung:", "E-Mail:", "Registrieren", "Erste Sprache", "Deutsch"],
  "fr-FR": ["Nom d'utilisateur :", "Mot de passe :", "Confirmation du mot de passe :", "E-mail :", "S'inscrire", "Première Langue", "Français"],
  "cn": ["用户名：", "密码：", "确认密码：", "电子邮件：", "注册", "第一语言", "中文"],
  "ja": ["ユーザー名：", "パスワード：", "パスワード確認：", "メールアドレス：", "登録", "第一言語", "日本語"],
  "pl": ["Nazwa użytkownika:", "Hasło:", "Potwierdzenie hasła:", "E-mail:", "Zarejestruj się", "Pierwszy język", "Polski"],
  "es": ["Nombre de usuario:", "Contraseña:", "Confirmación de contraseña:", "Correo electrónico:", "Regístrate", "Primer idioma", "Español"],
  "ru": ["Имя пользователя:", "Пароль:", "Подтверждение пароля:", "E-mail:", "Зарегистрироваться", "Первый язык", "Русский"],
  "pt-PT": ["Nome de usuário:", "Senha:", "Confirmação de senha:", "E-mail:", "Registrar", "Primeiro Idioma", "Português"],
  "ko": ["사용자 이름:", "비밀번호:", "비밀번호 확인:", "이메일:", "등록", "주요 언어", "한국어"],
  "it": ["Nome utente:", "Password:", "Conferma password:", "Email:", "Registrati", "Prima Lingua", "Italiano"],
  "tr": ["Kullanıcı Adı:", "Parola:", "Parola Onayı:", "E-posta:", "Kaydol", "İlk Dil", "Türkçe"],
  "nl": ["Gebruikersnaam:", "Wachtwoord:", "Wachtwoord bevestigen:", "E-mail:", "Registreren", "Eerste Taal", "Nederlands"],
  "sv": ["Användarnamn:", "Lösenord:", "Bekräfta lösenord:", "E-post:", "Registrera", "Första språket", "Svenska"],
  "uk": ["Ім'я користувача:", "Пароль:", "Підтвердження пароля:", "E-mail:", "Зареєструватися", "Перший Язик", "Українська"],
  "ar": ["اسم المستخدم", "كلمة السر", "تأكيد كلمة السر", "البريد الإلكتروني", "تسجيل الدخول", "اللغة الأولى", "العربية"],
"no": ["Brukernavn", "Passord", "Bekreft passord", "E-postadresse", "Registrer deg", "Førstespråk", "Norsk"],
"fi": ["Käyttäjänimi", "Salasana", "Vahvista salasana", "Sähköposti", "Rekisteröidy", "Äidinkieli", "Suomi"],
"da": ["Brugernavn", "Adgangskode", "Bekræft adgangskode", "E-mailadresse", "Opret bruger", "Førstesprog", "Dansk"],
"cs": ["Uživatelské jméno", "Heslo", "Potvrzení hesla", "E-mailová adresa", "Zaregistrovat se", "První jazyk", "Čeština"]
}


