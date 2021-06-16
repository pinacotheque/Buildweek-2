import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Profile from './Components/Profile'
import { useState, useEffect} from 'react'
import LoginModal from './Components/Modals/LoginModal/LoginModal'
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'

function App() {

  const [loggedIn, setLoggedIn] = useState(false)
  const [myProfile, setMyProfile] = useState(null)

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
    const response = await fetch("https://striveschool-api.herokuapp.com/api/profile/me", {
      headers: {
        "Authorization": "Bearer " + localStorage.getItem('token')
      }
    })
    if(response.ok) {
      const data = await response.json()
      setMyProfile(data)
    } else {
      console.log("error fetching profile")
    }
  }

  return (
    <>
      <LoginModal  show={!loggedIn} close={close} />
      <Navbar profile={myProfile} />
      <Profile loggedIn={loggedIn} myProfile={myProfile} />
      <Footer />
    </>
  )
}

export default App;