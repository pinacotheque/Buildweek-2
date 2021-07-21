import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css"
import Profile from "./Components/Profile"
import { useState, useEffect } from "react"
// import LoginModal from "./Components/Modals/LoginModal/LoginModal"
import Navbar from "./Components/Navbar/Navbar"
import Footer from "./Components/Footer/Footer"
import { getProfile } from "./Lib/fetch"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
import PublicProfile from "./Components/PublicProfile"
import Homepage from "./Components/Homepage"

function App() {
  const [loggedIn, setLoggedIn] = useState(false)
  const [myProfile, setMyProfile] = useState({})

  const logout = () => {
    localStorage.clear()
    setLoggedIn(false)
  }

  const close = () => setLoggedIn(true)

  useEffect(() => {
    const token = localStorage.getItem("token")
    if (token) {
      localStorage.setItem("token", token)
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
    const result = await fetch(
      "http://localhost:3001/api/profiles/" + myId
    )
    if (!result.error) {
      const data = await result.json()
      setMyProfile(data)
    } else {
      console.log("error with getting profile")
    }
  }

  return (
    <Router>
      {/* <LoginModal show={!loggedIn} close={close} refresh={fetchProfile} /> */}
      <Navbar profile={myProfile} logout={logout} />
      {console.log(myProfile, "my profile name")}
      <Route path="/:myId">
        {console.log(myProfile)}
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

export default App
