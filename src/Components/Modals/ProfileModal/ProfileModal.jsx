import { Modal, Form, Row, Col } from "react-bootstrap"
import styles from "./ProfileModal.module.css"
import { useState } from "react"

const ProfileModal = (props) => {
  const [profData, setProfData] = useState({
    name: props.profile.name,
    surname: props.profile.surname,
    email: props.profile.email,
    bio: props.profile.bio,
    title: props.profile.title,
    area: props.profile.area,
    image: props.profile.image,
  })

  const changeData = (id, value) => {
    const profile = { ...profData, [id]: value }
    setProfData(profile)
  }

  const putProf = async (e) => {
    e.preventDefault()

    const response = await fetch(
      "http://localhost:3001/api/profiles/" + localStorage.getItem("myId"),
      {
        headers: {
          "Content-Type": "application/json",
        },
        method: "PUT",
        body: JSON.stringify(profData),
      }
    )

    if (!response.error) {
      props.refresh()
      props.closeFunc()
    } else {
      console.log("error with posting experience")
    }
  }

  return (
    <Modal show={props.show} onHide={props.closeFunc} size="lg" scrollable={true}>
      <Form className="h-100 d-flex flex-column" onSubmit={(e) => putProf(e)}>
        <Modal.Header>
          <Modal.Title>Edit intro</Modal.Title>
          <div
            className="ml-auto m-0 p-0"
            onClick={props.closeFunc}
            style={{ cursor: "pointer" }}></div>
        </Modal.Header>
        <Modal.Body className="p-4 h-100">
          <Form.Row>
            <Form.Group as={Col} controlId="name" className="mb-0">
              <Form.Label className={styles.labels}>First Name *</Form.Label>
              <Form.Control
                type="text"
                placeholder="First Name"
                className={styles.inputBase}
                value={profData.name}
                onChange={(e) => changeData(e.target.id, e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group as={Col} controlId="surname" className="mb-0">
              <Form.Label className={styles.labels}>Last Name *</Form.Label>
              <Form.Control
                type="text"
                placeholder="Last Name"
                className={styles.inputBase}
                value={profData.surname}
                onChange={(e) => changeData(e.target.id, e.target.value)}
                required
              />
            </Form.Group>
          </Form.Row>

          <button className={styles.formerName}>Add former name</button>
          <div>
            <button disabled className={styles.pron}>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  data-supported-dps="16x16"
                  fill="currentColor"
                  width="16"
                  height="16"
                  focusable="false">
                  <path d="M14 9H9v5H7V9H2V7h5V2h2v5h5z"></path>
                </svg>
              </div>
              <span>Record name pronunciation</span>
            </button>
            <p>Name pronunciation can only be added using our mobile app.</p>
          </div>

          <Form.Group controlId="pronouns" className={styles.noMargin}>
            <Form.Label className={styles.labels}>Pronouns</Form.Label>
            <Form.Control
              as="select"
              defaultValue="Please select"
              className={styles.inputBase}>
              <option>Please select</option>
              <option>She/Her</option>
              <option>He/Him</option>
              <option>They/Them</option>
              <option>Custom</option>
            </Form.Control>
          </Form.Group>
          <p className={styles.pronounsSub}>
            Let others know how to refer to you. <span>Learn more</span>
          </p>
          <button className={styles.visibleTo}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              data-supported-dps="16x16"
              fill="currentColor"
              class="mercado-match"
              width="16"
              height="16"
              focusable="false">
              <path d="M8 3a8.59 8.59 0 00-8 5 8.54 8.54 0 008 5 8.55 8.55 0 008-5 8.55 8.55 0 00-8-5zm0 8a3 3 0 113-3 3 3 0 01-3 3zm2-3a2 2 0 11-2-2 2 2 0 012 2z"></path>
            </svg>
            <span>Visible to: All LinkedIn members</span>
          </button>

          <Form.Group controlId="title" className="mt-4">
            <Form.Label className={styles.labels}>Headline *</Form.Label>
            <Form.Control
              className={styles.textArea}
              as="textarea"
              rows={2}
              value={profData.title}
              onChange={(e) => changeData(e.target.id, e.target.value)}
            />
          </Form.Group>

          <button className={styles.addPos}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              data-supported-dps="16x16"
              fill="currentColor"
              class="mercado-match"
              width="16"
              height="16"
              focusable="false">
              <path d="M14 9H9v5H7V9H2V7h5V2h2v5h5z"></path>
            </svg>
            <span>Add current position</span>
          </button>

          <Form.Group controlId="education" className={styles.noMargin}>
            <Form.Label className={styles.labels}>Education</Form.Label>
            <Form.Control
              as="select"
              defaultValue="Example education"
              className={styles.inputBase}>
              <option>Example education</option>
              <option>Example education 2</option>
            </Form.Control>
          </Form.Group>

          <button className={styles.addEdu}>Add new education</button>
          <Form.Check id="checkEdu" className={styles.checkbox}>
            <Form.Check.Input type="checkbox" />
            <Form.Check.Label>Show education in my intro</Form.Check.Label>
          </Form.Check>

          <Form.Group controlId="area">
            <Form.Label className={styles.labels}>Country/Region *</Form.Label>
            <Form.Control
              type="text"
              placeholder="EX. London, UK"
              className={styles.inputBase}
              value={profData.area}
              onChange={(e) => changeData(e.target.id, e.target.value)}
              required
            />
          </Form.Group>

          <Row>
            <Col xs={4}>
              <Form.Label className={styles.labels}>Postal code</Form.Label>
              <Form.Control placeholder="Postal code" className={styles.inputBase} />
            </Col>
            <Col>
              <Form.Label className={styles.labels}>
                Locations within this area
              </Form.Label>
              <Form.Control
                placeholder="Locations within this area"
                className={styles.inputBase}
              />
            </Col>
          </Row>

          <Form.Group controlId="industry" className={styles.industry}>
            <Form.Label className={styles.labels}>Industry *</Form.Label>
            <Form.Control
              as="select"
              defaultValue="Industry"
              className={styles.inputBase}>
              <option>Example industry</option>
              <option>Example industry 2</option>
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="area">
            <Form.Label className={styles.labels}>Contact Info</Form.Label>
            <Form.Control
              type="text"
              placeholder="Contact Info"
              className={styles.inputBase}
            />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer className="d-flex">
          <button
            style={{
              color: "white",
              backgroundColor: "rgb(10,102,194)",
              border: "none",
              borderRadius: "2rem",
              minWidth: "4rem",
              minHeight: "2rem",
            }}
            className="ml-auto"
            type="submit">
            Save
          </button>
        </Modal.Footer>
      </Form>
    </Modal>
  )
}

export default ProfileModal
