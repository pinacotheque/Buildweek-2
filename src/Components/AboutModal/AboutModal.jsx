import { Modal, Form, Row, Col } from "react-bootstrap";
import styles from './AboutModal.module.css'
import { useState } from 'react'

const AboutModal = (props) => {

  const [profData, setProfData] = useState(
    {
      name: props.profile.name,
      surname: props.profile.surname,
      email: props.profile.email,
      bio: props.profile.bio,
      title: props.profile.title,
      area: props.profile.area,
      image: props.profile.image
    }
  )

  const changeData = (id, value) => {
    const profile = {...profData, [id]: value}
    setProfData(profile)
  }

  const putAbout = async (e) => {
    e.preventDefault()
    const response = await fetch(`https://striveschool-api.herokuapp.com/api/profile/`, {
      method: "PUT",
      body: JSON.stringify(profData),
      headers: {
          "Content-Type": "application/json",
          "Authorization": "Bearer " + localStorage.getItem('token')
      }
    })
    if(response.ok) {
      props.refresh()
      props.closeFunc()
    } else {
      console.log("error with posting experience")
    }
  }

  return (
    <Modal show={props.show} onHide={props.closeFunc} size="lg" scrollable={true}>
      <Form className="h-100 d-flex flex-column" onSubmit={(e) => putAbout(e)}>
        <Modal.Header>
          <Modal.Title>Edit About</Modal.Title>
          <div className="ml-auto m-0 p-0" onClick={props.closeFunc} style={{ cursor: "pointer" }}>
          </div>
        </Modal.Header>
        <Modal.Body className="p-4 h-100">
            <Form.Group className="mb-3" controlId="bio">
                <Form.Label>Summary</Form.Label>
                <Form.Control as="textarea" rows={5} value={profData.bio} onChange={(e) => changeData(e.target.id, e.target.value)} />
            </Form.Group>
        </Modal.Body>
        <Modal.Footer className="d-flex">
          <button style={{ color: "white", backgroundColor: "rgb(10,102,194)", border: "none", borderRadius: "2rem", minWidth: "4rem", minHeight: "2rem" }} className="ml-auto" type="submit" >
            Save
          </button>
        </Modal.Footer>
      </Form>
    </Modal>
  )
}

export default AboutModal