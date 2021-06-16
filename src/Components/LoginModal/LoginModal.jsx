import { Modal, Button, Form } from "react-bootstrap"
import { useState } from 'react'

const LoginModal = (props) => {

    const [data, setData] = useState({area: "",
        bio: "",
        email: "",
        image: "",
        name: "",
        password: "",
        surname: "",
        title: "",
        username: ""})

    const changeData = (id, value) => {
        const newData = {...data, [id]: value}
        setData(newData)
    }

    const setUserId = async () => {
        const response = await fetch("https://striveschool-api.herokuapp.com/api/profile/me", {
            headers: {
                "Authorization": "Bearer " + localStorage.getItem('token')
            }
        })
        if(response.ok) {
            const data = await response.json()
            localStorage.setItem('myId', data._id)
        } else {
            console.log("error with post request")
        }
    }

    const submitForm = async (e) => {
        e.preventDefault()

        const response = await fetch("https://striveschool-api.herokuapp.com/api/account/register", {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            }
        })
        if(response.ok) {
            const data = await response.json()
            if(data.access_token === "Invalid username / Password") {
                console.log("invalid username or password")
            } else {
                localStorage.setItem('token', data.access_token)
                setUserId()
                props.close()
            }
        } else {
            console.log("error with post request")
        }
    }

    return (
        <Modal show={props.show}>
            <Modal.Header>
            <Modal.Title>Log In To Strive Linked In</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="text-center mb-2">
                    <strong>Please log in to your strive linked in account</strong>
                </div>
                <Form className="d-flex flex-column" onSubmit={(e) => submitForm(e)}>
                    <Form.Group className="mb-3" controlId="username">
                        <Form.Label>Username</Form.Label>
                        <Form.Control type="username" placeholder="Username" required value={data.username} onChange={(e) => changeData(e.target.id, e.target.value)} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="password">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" required value={data.password} onChange={(e) => changeData(e.target.id, e.target.value)}/>
                    </Form.Group>
                    <Button variant="primary" type="submit" className="ml-auto">
                        Log In
                    </Button>
                </Form>
            </Modal.Body>
        </Modal>
    )
}

export default LoginModal