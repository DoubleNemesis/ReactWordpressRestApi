import React, { useState, useEffect } from 'react'
import logo from './logo.svg';

// to get specific data: validate jwt and server side use that username to fetch data. Make sure key is needed to access enpoint.
function ProfilePage(props) {
  const [pageText, setPageText] = useState('You are not currently logged in. Please login to see your user profile')
  const [email, setEmail] = useState('')
  const [regDate, setRegDate] = useState('')

  useEffect(()=>{
    let userJWT = localStorage.getItem('jwt') || ''
    console.log(userJWT)
      if (userJWT.length > 0) {
        let url = `https://tomsclassroom.com/student/?rest_route=/simple-jwt-login/v1/auth/validate&JWT=${userJWT}`
        fetch(url)
          .then(response => response.json()) 
          .then(data => {
            if (data['success']===true){
              console.log('user was persisted!')
              setEmail(`Email: ${data['data']['user']['user_email']}`)
              setRegDate(`Date of registration: ${data['data']['user']['user_registered']}`)
              setPageText(`${data['data']['user']['user_login']}'s User Profile`)
              props.setIsLoggedIn(true)
              props.setUsername(data['data']['user']['user_login'])
              props.setServerMessage('')
            }
            else {
              console.log(data)
              console.log('Persist failed')
              props.setServerMessage(data['data']['message'])
            }

          })
      }
    }, [])

  return (
    <div className="App">
      <header className="App-header">
        <h1>Profile</h1>
        <p>{props.serverMessage}</p>
        <p>{pageText}</p>
        <p>{email}</p>
        <p>{regDate}</p>
        <img src={logo} className="App-logo" alt="logo"/>
      </header>
    </div>
  );
}

export default ProfilePage;