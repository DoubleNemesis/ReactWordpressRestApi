import React, { useState } from 'react'
import logo from './logo.svg';
import SignUpAPI from './SignUpAPI';

function SingUp(props) {
    const [APIDetailsSignUp, setAPIDetailsSignUp] = useState({
        user: '',    
        email: '',
        pass: '',
      })
    const [signUpDetails, setSignUpDetails] = useState({
        user: '',
        email: '',
        pass: '',
    })
    console.log(signUpDetails)

    function handleChange(e) {
        const { name, value } = e.target
        setSignUpDetails(prev => {
            return (
                { ...prev, [name]: value }
            )
        })
    }

    function handleSubmit() {
        setAPIDetailsSignUp({ ...signUpDetails })
    }

    return (
        <>
            <div className="App">
                <header className="App-header">
                    <h2>Sign Up</h2>
                    <p>{props.serverMessage}</p>
                    <div className="login">
                        <input type="text" placeholder="User Name" name="user" value={signUpDetails.user} onChange={handleChange} />
                        <input type="email" placeholder="Email Adress" name="email" value={signUpDetails.email} onChange={handleChange} />
                        <input type="password" placeholder="Password" name="pass" value={signUpDetails.pass} onChange={handleChange} />
                        <input type="submit" onClick={handleSubmit} />
                    </div>
                    <img src={logo} className="App-logo" alt="logo" />
                </header>
            </div>
            <SignUpAPI APIDetailsSignUp={APIDetailsSignUp} setUsername={props.setUsername} setIsLoggedIn={props.setIsLoggedIn} setServerMessage={props.setServerMessage} />
        </>
    )


}

export default SingUp