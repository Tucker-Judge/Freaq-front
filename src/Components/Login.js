import React, { useState } from 'react';

import {useNavigate} from "react-router-dom"
function Login({user, setUser}) {
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
        Username:
        <input type="username" value={username} onChange={handleUsernameChange} />
      </label>
      <br />
      <label>
        Password:
        <input type="password" value={password} onChange={handlePasswordChange} />
      </label>
      <br />
      <button type="submit">Log In</button>
    </form>
    </div>
  );
}

export default Login;
