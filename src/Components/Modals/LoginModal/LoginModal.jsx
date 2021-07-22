import { Modal, Button, Form } from "react-bootstrap"
import { useState, useEffect } from "react"
import { Redirect } from "react-router-dom"

const LoginModal = (props) => {
  const [loggedIn, setLoggedIn] = useState(false)
  const [users, setUsers] = useState([])
  const [selectedUser, setSelectedUser] = useState(null)

  const getAllUsers = async () => {
    const response = await fetch("http://localhost:3001/api/profiles")
    if (response.ok) {
      const data = await response.json()
      setUsers(data)
    } else {
      console.log("error getting users")
    }
  }

  useEffect(() => {
    getAllUsers()
  }, [])

  const selectUser = (id) => {
    setSelectedUser(id)
  }

  const submitForm = (e) => {
    e.preventDefault()
    localStorage.setItem("myId", selectedUser)
    setLoggedIn(true)
    props.close()
  }

  return (
    <Modal show={props.show}>
      <Modal.Header>
        <Modal.Title>Log In To Strive Linked In</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="text-center mb-2">
          <strong>Please choose the user you want to be</strong>
        </div>
        <Form className="d-flex flex-column" onSubmit={(e) => submitForm(e)}>
          <select onChange={(e) => selectUser(e.target.value)}>
            <option>Choose User</option>
            {users.length !== 0 &&
              users.map((u) => (
                <option value={u._id}>
                  {u.name} {u.surname}
                </option>
              ))}
          </select>
          <Button variant="primary" type="submit" className="ml-auto">
            Log In
          </Button>
          {loggedIn && <Redirect to="/me" />}
        </Form>
      </Modal.Body>
    </Modal>
  )
}

export default LoginModal
