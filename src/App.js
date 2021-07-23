import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css"
import Profile from "./Components/Profile"
import { useState, useEffect } from "react"
import Navbar from "./Components/Navbar/Navbar"
import Footer from "./Components/Footer/Footer"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import PublicProfile from "./Components/PublicProfile"
import Homepage from "./Components/Homepage"
import LoginModal from "./Components/Modals/LoginModal/LoginModal"
import RegisterPage from "./Components/RegisterPage/RegisterPage"
import { BACKEND_URL } from "./env.js"

function App() {
  const [loggedIn, setLoggedIn] = useState(false)
  const [myProfile, setMyProfile] = useState({})

  const logout = () => {
    localStorage.clear()
    setLoggedIn(false)
  }

  const close = () => setLoggedIn(true)

  useEffect(() => {
    const id = localStorage.getItem("myId")
    if (id) {
      setLoggedIn(true)
    }
  }, [])

  useEffect(() => {
    fetchProfile()
  }, [loggedIn])

  useEffect(() => {
    fetchProfile()
  }, [])

  const fetchProfile = async () => {
    let myId = localStorage.getItem("myId")
    const result = await fetch(BACKEND_URL + "/profiles/" + myId)
    if (!result.error) {
      const data = await result.json()
      setMyProfile(data)
    } else {
      console.log("error with getting profile")
    }
  }

  return (
    <Router>
      <LoginModal show={!loggedIn} close={close} refresh={fetchProfile} />
      <Navbar profile={myProfile} logout={logout} />
      <Switch>
        <Route path="/register">
          <RegisterPage refresh={fetchProfile} />
        </Route>
        <Route path="/in/:id">
          <PublicProfile profile={myProfile} />
        </Route>
        <Route path="/:myId">
          <Profile loggedIn={loggedIn} myProfile={myProfile} refresh={fetchProfile} />
        </Route>
        <Route exact path="/">
          <Homepage profile={myProfile} />
        </Route>
      </Switch>
      <Footer />
    </Router>
  )
}

export default App
