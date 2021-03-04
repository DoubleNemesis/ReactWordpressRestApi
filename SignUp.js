import React, {useState} from 'react'
import logo from './logo.svg';

function SingUp(props) {
    const [signUpDetails, setSignUpDetails] = useState({
      user: '',
      email: '',
      pass: '',
    })
    // console.log(signUpDetails)

    function handleChange(e) {
        const { name, value } = e.target
        setSignUpDetails(prev => {
            return (
                { ...prev, [name]: value }
            )
        })
    }

    function handleSubmit(){
        props.setAPIDetails({...signUpDetails})
    }

    return (

        <div className="App">
            <header className="App-header">
                <h2>Sign Up</h2>
                <div className="login">
                    <input type="text" placeholder="User Name" name="user" value={signUpDetails.user} onChange={handleChange} />
                    <input type="email" placeholder="Email Adress" name="email" value={signUpDetails.email} onChange={handleChange} />
                    <input type="password" placeholder="Password" name="pass" value={signUpDetails.pass} onChange={handleChange} />
                    <input type="submit" onClick={handleSubmit} />
                </div>
                <img src={logo} className="App-logo" alt="logo" />
            </header>
        </div>

    )


}

export default SingUp