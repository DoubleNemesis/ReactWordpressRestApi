import React, { useState } from 'react'
import { Link, Route, Switch } from 'react-router-dom'
import Header from './Header'
import Login from './Login'
import MainPage from './Home'
import SignUp from './SignUp'
import SignUpAPI from './SignUpAPI'
import LoginAPI from './LoginAPI'

function App() {
  const [username, setUsername] = useState('')
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [APIDetailsSignUp, setAPIDetailsSignUp] = useState({
    user: '',
    email: '',
    pass: '',
  })
  const [APIDetailsLogin, setAPIDetailsLogin] = useState({
    user: '',
    pass: '',
  })

  return (
    <>

      <Header username={username} isLoggedIn={isLoggedIn}>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/signup">Sign Up</Link>
          <Link to="/login">Login</Link>
        </nav>
      </Header>
      <Switch>
        <Route exact path="/">
          <MainPage />
        </Route>
        <Route path="/login">
          <Login setAPIDetails={setAPIDetailsLogin} />
        </Route>
        <Route path="/signup">
          <SignUp setAPIDetails={setAPIDetailsSignUp} />
        </Route>
      </Switch>
      <SignUpAPI APIDetailsSignUp={APIDetailsSignUp}/>
      <LoginAPI APIDetailsLogin={APIDetailsLogin}/>
    </>
  );
}

export default App;
