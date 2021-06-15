import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Profile from './Components/Profile'
import { useState, useEffect} from 'react'
import LoginModal from './Components/LoginModal/LoginModal'

function App() {

  const [loggedIn, setLoggedIn] = useState(false)

  useEffect(() => {
    const token = localStorage.getItem('token')
    if(token) {
      localStorage.setItem('token', token)
      setLoggedIn(true)
    }
  }, [])

  return (
    <>
      <LoginModal  show={!loggedIn} />
      <Profile />
    </>
  )
}

export default App;