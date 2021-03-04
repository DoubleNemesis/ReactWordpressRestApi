import React from 'react'
import logo from './logo.svg';

function Login(props) {

    return (

        <div className="App">
            <header className="App-header">
            <h2>Login</h2>
                <div className="login">

                <input type="text" placeholder="User Name"/>
                <input type="password" placeholder="Password"/>
                <input type="submit" value="Go"/>
                </div>
                <img src={logo} className="App-logo" alt="logo" ></img>

            </header>
        </div>

    )


}

export default Login