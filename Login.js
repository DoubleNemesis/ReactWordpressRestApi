import React, { useState } from 'react'
import logo from './logo.svg';
import LoginAPI from './LoginAPI';

function Login(props) {
    const [APIDetailsLogin, setAPIDetailsLogin] = useState({
        user: '',
        pass: '',
      })
    const [loginDetails, setLoginDetails] = useState({
        user: '',
        pass: '',
    })

    function handleChange(e) {
        const { name, value } = e.target
        setLoginDetails(prev => {
            return (
                { ...prev, [name]: value }
            )
        })
    }

    function handleSubmit() {
        setAPIDetailsLogin({ ...loginDetails }) //check i need the ...here
    }
    console.log(loginDetails)
    return (
        <>
            <div className="App">
                <header className="App-header">
                    <h2>Login</h2>
                    <p>{props.serverMessage}</p>
                    <div className="login">
                        <input type="text" placeholder="User Name" name="user" value={loginDetails.user} onChange={handleChange} />
                        <input type="password" placeholder="Password" name="pass" value={loginDetails.pass} onChange={handleChange} />
                        <input type="submit" value="Go" onClick={handleSubmit} />
                    </div>
                    <img src={logo} className="App-logo" alt="logo" ></img>
                </header>
            </div>
            <LoginAPI APIDetailsLogin={APIDetailsLogin} setUsername={props.setUsername} setIsLoggedIn={props.setIsLoggedIn} setServerMessage={props.setServerMessage} />
        </>
    )
}

export default Login