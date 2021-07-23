import { Form, Row, Container, Col } from "react-bootstrap"
import styles from "./RegisterPage.module.css"
import { useState } from "react"
import { useHistory } from "react-router-dom"
import { BACKEND_URL } from "../../env.js"

const RegisterPage = (props) => {
  const [profData, setProfData] = useState({
    name: "",
    surname: "",
    email: "",
    bio: "",
    title: "",
    area: "",
    image: "",
  })

  const history = useHistory()

  const changeData = (id, value) => {
    const profile = { ...profData, [id]: value }
    setProfData(profile)
  }

  const postProf = async (e) => {
    e.preventDefault()

    const response = await fetch(BACKEND_URL + "/profiles/", {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(profData),
    })

    if (response.ok) {
      const data = await response.json()
      localStorage.setItem("myId", data)
      props.refresh()
      history.push("/me")
    } else {
      console.log("error with posting experience")
    }
  }

  return (
    <Container fluid>
      <Row className={styles.main}>
        <Col xs={12} md={{ offset: 3, span: 6 }} lg={{ offset: 4, span: 4 }}>
          <h1 className="text-center mb-5">REGISTER PAGE</h1>
          <Form className="h-100 d-flex flex-column" onSubmit={(e) => postProf(e)}>
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

              <Form.Group as={Col} controlId="surname" className="mb-3">
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

            <Form.Group controlId="email">
              <Form.Label className={styles.labels}>Email *</Form.Label>
              <Form.Control
                type="email"
                placeholder="your@email.com"
                className={styles.inputBase}
                value={profData.email}
                onChange={(e) => changeData(e.target.id, e.target.value)}
                required
              />
            </Form.Group>

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
            <button
              style={{
                color: "white",
                backgroundColor: "rgb(10,102,194)",
                fontSize: "25px",
                border: "none",
                borderRadius: "2rem",
                minWidth: "100%",
                minHeight: "3rem",
              }}
              className="ml-auto mb-5 mt-3"
              type="submit">
              Register
            </button>
          </Form>
        </Col>
      </Row>
    </Container>
  )
}

export default RegisterPage
