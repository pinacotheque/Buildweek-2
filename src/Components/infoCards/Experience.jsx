import styles from './infoCards.module.css'
import CardBoilerplate from "./Common/CardBoilerplate"
import { Row, Col } from 'react-bootstrap';
import IconBtn from './Common/IconBtn';
import { useState } from 'react'
import ExpEduForm from '../ExpEduForm'

const Experience = (props) => {

    const [show, setShow] = useState(false)

    const showModal = () => setShow(true)
    const hideModal = () => setShow(false)

    return (
        <CardBoilerplate add title="Experience" callback={showModal}>
            <ExperienceCard occupation="Food Service Worker" company="McDonald's" workTime="Full-time" years="Mar 2019 - Aug 2019" location="London, UK" description="testing" src="https://media-exp1.licdn.com/dms/image/C4E0BAQHWxquJ9PJxvw/company-logo_100_100/0/1552140114610?e=1631750400&v=beta&t=xGCfxULpQucZ16Mwcr_FPXtGpeK_vVS90Dnt5Egbt50" />
            <ExperienceCard occupation="Food Service Worker" company="McDonald's" workTime="Full-time" years="Mar 2019 - Aug 2019" location="London, UK" description="testing" src="https://media-exp1.licdn.com/dms/image/C4E0BAQHWxquJ9PJxvw/company-logo_100_100/0/1552140114610?e=1631750400&v=beta&t=xGCfxULpQucZ16Mwcr_FPXtGpeK_vVS90Dnt5Egbt50" />
            <ExpEduForm show={show} closeFunc={hideModal} />
        </CardBoilerplate>
    )
}

export default Experience


const ExperienceCard = (props) => {
    return (
        <Col className={styles.experienceCol}>
            <Row>
                <div className={`${styles.experience} d-flex`}>
                    <img src={props.src} alt="" />
                    <div className="mr-auto">
                        <h3>{props.occupation}</h3>
                        <p>{props.company}{props.workTime && <span>{props.workTime}</span>}</p>
                        {props.years && <h4>{props.years}</h4>}
                        {props.location && <h4>{props.location}</h4>}
                        {props.description && <p>{props.description}</p>}
                    </div>
                    <IconBtn edit />
                </div>
            </Row>
        </Col>
    )
}