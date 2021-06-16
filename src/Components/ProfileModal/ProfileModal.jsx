import { Modal, Form, Row, Col } from "react-bootstrap";
import styles from './ProfileModal.module.css'
import { useState } from 'react'

const ProfileModal = (props) => {

//   const [checked, setChecked] = useState(false)
//   const [experience, setExperience] = useState(
//     {
//       role: props.edit != null ? props.edit.role : '',
//       company: props.edit != null ? props.edit.company : '',
//       area: props.edit != null ? props.edit.area : '',
//       startDate: props.edit != null ? props.edit.startDate : '',
//       endDate: props.edit != null ? props.edit.endDate : '',
//       description: props.edit != null ? props.edit.description : '',
//     }
//   )

//   const changeData = (id, value) => {
//     const exp = {...experience, [id]: value}
//     setExperience(exp)
//   }

//   const postExperience = async (e) => {
//     e.preventDefault()
//     const response = await fetch(`https://striveschool-api.herokuapp.com/api/profile/${localStorage.getItem('myId')}/experiences`, {
//       method: "POST",
//       body: JSON.stringify(experience),
//       headers: {
//           "Content-Type": "application/json",
//           "Authorization": "Bearer " + localStorage.getItem('token')
//       }
//     })
//     if(response.ok) {
//       props.closeFunc()
//     } else {
//       console.log("error with posting experience")
//     }
//   }

//   const putExperience = async (e) => {
//     e.preventDefault()
//     const response = await fetch(`https://striveschool-api.herokuapp.com/api/profile/${localStorage.getItem('myId')}/experiences/${props.edit._id}`, {
//       method: "PUT",
//       body: JSON.stringify(experience),
//       headers: {
//           "Content-Type": "application/json",
//           "Authorization": "Bearer " + localStorage.getItem('token')
//       }
//     })
//     if(response.ok) {
//       props.reload()
//       props.closeFunc()
//     } else {
//       console.log("error with posting experience")
//     }
//   }

//   const doExperience = (e) => {
//     props.edit ? putExperience(e) : postExperience(e)
//   }

  return (
    <Modal show={props.show} onHide={props.closeFunc} size="lg" scrollable={true}>
      <Form >
        <Modal.Header>
          <Modal.Title>Edit intro</Modal.Title>
          <div className="ml-auto m-0 p-0" onClick={props.closeFunc} style={{ cursor: "pointer" }}>
          </div>
        </Modal.Header>
        <Modal.Body className="p-4 overflow-auto">
          <Form.Row>
            <Form.Group as={Col} controlId="name" className="mb-0">
              <Form.Label className={styles.labels}>First Name *</Form.Label>
              <Form.Control type="text" placeholder="First Name" className={styles.inputBase} required/>
            </Form.Group>

            <Form.Group as={Col} controlId="surname" className="mb-0">
              <Form.Label className={styles.labels}>Last Name *</Form.Label>
              <Form.Control type="text" placeholder="Last Name" className={styles.inputBase} required/>
            </Form.Group>
          </Form.Row>

          <button className={styles.formerName}>Add former name</button>
          <div>
            <button disabled className={styles.pron} >
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" data-supported-dps="16x16" fill="currentColor" width="16" height="16" focusable="false">
                  <path d="M14 9H9v5H7V9H2V7h5V2h2v5h5z"></path>
                </svg>
              </div>
              <span>Record name pronunciation</span>
            </button>
            <p>Name pronunciation can only be added using our mobile app.</p>
          </div>

          <Form.Group controlId="pronouns" className={styles.noMargin}>
            <Form.Label className={styles.labels}>Pronouns</Form.Label>
            <Form.Control as="select" defaultValue="Please select" className={styles.inputBase} >
              <option>Please select</option>
              <option>She/Her</option>
              <option>He/Him</option>
              <option>They/Them</option>
              <option>Custom</option>
            </Form.Control>
          </Form.Group>
          <p className={styles.pronounsSub}>Let others know how to refer to you. <span>Learn more</span></p>
          <button className={styles.visibleTo}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" data-supported-dps="16x16" fill="currentColor" class="mercado-match" width="16" height="16" focusable="false">
              <path d="M8 3a8.59 8.59 0 00-8 5 8.54 8.54 0 008 5 8.55 8.55 0 008-5 8.55 8.55 0 00-8-5zm0 8a3 3 0 113-3 3 3 0 01-3 3zm2-3a2 2 0 11-2-2 2 2 0 012 2z"></path>
            </svg>
            <span>Visible to: All LinkedIn members</span>
          </button>

          <Form.Group controlId="title" className="mt-4">
            <Form.Label className={styles.labels}>Headline *</Form.Label>
            <Form.Control className={styles.textArea} as="textarea" rows={2} />
          </Form.Group>

          <button className={styles.addPos}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" data-supported-dps="16x16" fill="currentColor" class="mercado-match" width="16" height="16" focusable="false">
              <path d="M14 9H9v5H7V9H2V7h5V2h2v5h5z"></path>
            </svg>
            <span>Add current position</span>
          </button>

          <Form.Group controlId="education" className={styles.noMargin}>
            <Form.Label className={styles.labels}>Education</Form.Label>
            <Form.Control as="select" defaultValue="Example education" className={styles.inputBase}>
              <option>Example education</option>
              <option>Example education 2</option>
            </Form.Control>
          </Form.Group>

          <button className={styles.addEdu}>Add new education</button>

          <Form.Group controlId="area">
              <Form.Label className={styles.labels}>Country/Region *</Form.Label>
              <Form.Control type="text" placeholder="Country" className={styles.inputBase} required/>
          </Form.Group>
          <Form.Group controlId="industry">
              <Form.Label className={styles.labels}>Industry *</Form.Label>
              <Form.Control as="select" defaultValue="Industry" className={styles.inputBase} >
                <option>Example industry</option>
                <option>Example industry 2</option>
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="area">
              <Form.Label className={styles.labels}>Contact Info</Form.Label>
              <Form.Control type="text" placeholder="Contact Info" required className={styles.inputBase} />
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

export default ProfileModal