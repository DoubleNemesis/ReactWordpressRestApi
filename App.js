import React, { useState } from 'react'
import { Link, Route, Switch } from 'react-router-dom'
import Header from './Header'
import Login from './Login'
import MainPage from './Home'
import SignUp from './SignUp'
import APIFetcher from './APIFetcher'

function App() {
  const [username, setUsername] = useState('')
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [APIDetails, setAPIDetails] = useState({
    user: '',
    email: '',
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
          <Login />
        </Route>
        <Route path="/signup">
          <SignUp setAPIDetails={setAPIDetails} />
        </Route>
      </Switch>
      <APIFetcher APIDetails={APIDetails}/>
    </>
  );
}

export default App;
