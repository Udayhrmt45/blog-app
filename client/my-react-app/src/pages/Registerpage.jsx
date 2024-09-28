import React, { useState } from "react";

export default function RegisterPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  async function register(event){
    event.preventDefault();
    const response = await fetch('https://mern-myblogapp.onrender.com/Register',{
      method:'POST',
      body: JSON.stringify({username,password}),
      headers:{'content-Type':'application/json'},
    });
    // console.log(response);
    if(response.status === 200){
      alert('Registration successful');
    }else{
      alert('Registration failed');
    }
  }

  return (
    <form className="register" onSubmit={register}>
      <h1>Register</h1>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(event) => setUsername(event.target.value)}
      />
      <input
        type="password"
        placeholder="password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
      />
      <button>Register</button>
    </form>
  );
}
