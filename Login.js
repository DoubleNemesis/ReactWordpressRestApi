import React, { useState } from 'react'
import logo from './logo.svg';

function Login(props) {
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

    function handleSubmit(){
        props.setApiDetailsLogin({loginDetails})
    }

    console.log(loginDetails)
    return (

        <div className="App">
            <header className="App-header">
                <h2>Login</h2>
                <div className="login">

                    <input type="text" placeholder="User Name" name="user" value={loginDetails.user} onChange={handleChange} />
                    <input type="password" placeholder="Password" name="pass" value={loginDetails.pass} onChange={handleChange} />
                    <input type="submit" value="Go" onClick={handleSubmit} />
                </div>
                <img src={logo} className="App-logo" alt="logo" ></img>

            </header>
        </div>

    )


}

export default Login