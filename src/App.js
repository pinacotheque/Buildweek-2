import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Profile from './Components/Profile'
import { useState, useEffect} from 'react'
import LoginModal from './Components/Modals/LoginModal/LoginModal'
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'
import { getProfile } from './Lib/fetch';

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
    const result = await getProfile()
    if(!result.error) {
      setMyProfile(result.data)
    } else {
      console.log('error with getting profile')
    }
  }

  return (
    <>
      <LoginModal show={!loggedIn} close={close} />
      <Navbar profile={myProfile} />
      <Profile loggedIn={loggedIn} myProfile={myProfile} />
      <Footer />
    </>
  )
}

export default App;