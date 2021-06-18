import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Profile from './Components/Profile'
import { useState, useEffect} from 'react'
import LoginModal from './Components/Modals/LoginModal/LoginModal'
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'
import { getProfile } from './Lib/fetch';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import PublicProfile from './Components/PublicProfile';
import Homepage from './Components/Homepage';

function App() {

  const [loggedIn, setLoggedIn] = useState(false)
  const [myProfile, setMyProfile] = useState(null)

  const logout = () => {
    localStorage.clear()
    setLoggedIn(false)
  }

  const close = () => setLoggedIn(true)

  useEffect(() => {
    const token = localStorage.getItem('token')
    if(token) {
      localStorage.setItem('token', token)
      setLoggedIn(true)
    }
  }, [])

  useEffect(() => {
    fetchProfile()
  }, [loggedIn])

  const fetchProfile = async () => {
    const result = await getProfile()
    if(!result.error) {
      setMyProfile(result.data)
    } else {
      console.log('error with getting profile')
    }
  }

  return (
    <Router>
      <LoginModal show={!loggedIn} close={close} refresh={fetchProfile} />
      <Navbar profile={myProfile} logout={logout} />
      <Route path="/me">
        <Profile loggedIn={loggedIn} myProfile={myProfile} refresh={fetchProfile} />
      </Route>
      <Route path="/in/:id">
        <PublicProfile profile={myProfile} />
      </Route>
      <Route exact path="/">
        <Homepage profile={myProfile} />
      </Route>
      <Footer />
    </Router>
  )
}

export default App;