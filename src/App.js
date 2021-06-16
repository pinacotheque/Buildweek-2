import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Profile from './Components/Profile'
import { useState, useEffect} from 'react'
import LoginModal from './Components/LoginModal/LoginModal'
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer'

function App() {

  const [loggedIn, setLoggedIn] = useState(false)

  const close = () => setLoggedIn(true)

  useEffect(() => {
    const token = localStorage.getItem('token')
    if(token) {
      localStorage.setItem('token', token)
      setLoggedIn(true)
    }
  }, [])

  return (
    <>
      <LoginModal  show={!loggedIn} close={close} />
      <Navbar />
      <Profile loggedIn={loggedIn} />
      <Footer />
    </>
  )
}

export default App;