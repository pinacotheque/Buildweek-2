import styles from "./infoCards.module.css"
import CardBoilerplate from "./Common/CardBoilerplate"
import { Row, Col } from "react-bootstrap"
import IconBtn from "./Common/IconBtn"
import { useState, useEffect } from "react"
import ExpEduForm from "../Modals/ExperienceModal/ExpEduForm"
import { BACKEND_URL } from "../../env.js"

const Experience = (props) => {
  const [show, setShow] = useState(false)
  const [experiences, setExperiences] = useState(null)
  const [edit, setEdit] = useState(null)

  const showModal = () => setShow(true)
  const hideModal = () => {
    setShow(false)
    setEdit(null)
  }

  const fetchExperiences = async (id = props.id) => {
    const response = await fetch(BACKEND_URL + "/experiences/" + id)
    if (!response.error) {
      const data = await response.json()
      setExperiences(data.experiences)
    } else {
      console.log("error with fetching experiences")
    }
  }

  useEffect(() => {
    const fetchExperiences = async (id = props.id) => {
      const response = await fetch(BACKEND_URL + "/experiences/" + id)
      if (!response.error) {
        const data = await response.json()
        setExperiences(data.experiences)
      } else {
        console.log("error with fetching experiences")
      }
    }
    fetchExperiences(props.id ? props.id : "")
  }, [props.id])

  const delExperience = async (id) => {
    const response = await fetch(
      BACKEND_URL + "/experiences/" + localStorage.getItem("myId") + "/" + id,
      {
        headers: {
          "Content-Type": "application/json",
        },
        method: "DELETE",
      }
    )

    if (!response.error) {
      console.log("strange")
    } else {
      console.log("error with deleting experience")
    }
    fetchExperiences(props.id)
  }

  return (
    <CardBoilerplate
      add={props.public ? false : true}
      title="Experience"
      callback={showModal}>
      {experiences &&
        experiences.map((exp) => (
          <ExperienceCard
            key={exp._id}
            public={props.public}
            {...exp}
            edit={() => {
              setEdit(exp)
              showModal()
            }}
            delete={() => delExperience(exp._id)}
          />
        ))}
      {show && (
        <ExpEduForm
          show={show}
          closeFunc={hideModal}
          edit={edit && edit}
          resetEdit={() => setEdit(null)}
          reload={fetchExperiences}
        />
      )}
    </CardBoilerplate>
  )
}

export default Experience

const ExperienceCard = (props) => {
  return (
    <Col className={styles.experienceCol}>
      <Row>
        <div className={`${styles.experience} d-flex`}>
          <img src={props.image} alt="" />
          <div className="mr-auto">
            <h3>{props.role}</h3>
            <p>
              {props.company}
              {props.workTime && <span>{props.workTime}</span>}
            </p>
            {props.startDate && props.endDate && (
              <h4>
                {props.startDate.split("-")[0]} - {props.endDate.split("-")[0]}
              </h4>
            )}
            {props.area && <h4>{props.area}</h4>}
            {props.description && <p>{props.description}</p>}
          </div>
          <div className="d-flex flex-column justify-content-between">
            {!props.public && <IconBtn edit callback={props.edit && props.edit} />}
            {!props.public && <IconBtn delete callback={props.delete && props.delete} />}
          </div>
        </div>
      </Row>
    </Col>
  )
}
