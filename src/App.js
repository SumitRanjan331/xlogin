import './App.css';
import { useState } from 'react';


function App() {

  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [invalid, setInvalid] = useState(false);
  const [login, setLogin] = useState(false);


  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log("submit >> ", e.target.elements);

    if(username === "user" && password === "password"){
      setLogin(true);
    }
    else {
      setInvalid(true);
    }
  }

  return (
    <div className="App">

        <h1>Login Page</h1>
        
        {
          login ? (<p>Welcome, user</p>) : (
                <>
                

                  {
                    invalid && <p>Invalid username or password</p>
                  }

              <form name='loginForm'
              onSubmit={handleSubmit}
              >

                <label for="username" >Username:</label>
                <input id='username' placeholder='Username' required type='text' 
                value={username}
                onChange={(e) => {
                  setUsername(e.target.value);
                }}
                />

                <br />

                <label for="password">Password:</label>
                <input id='password' placeholder='Password' required type='password' 
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value)
                }}
                />

                <br />

                <button
                type='submit'
                >Submit</button>
              </form>
              </>
          )
        }

    </div>
  );
}

export default App;