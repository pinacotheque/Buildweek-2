import styles from './infoCards.module.css'
import CardBoilerplate from "./Common/CardBoilerplate"
import { Row, Col } from 'react-bootstrap';
import AboutModal from '../AboutModal/AboutModal';
import { useState } from 'react'

const About = (props) => {
    const [show, setShow] = useState(false)

    const showModal = () => setShow(true)
    const hideModal = () => setShow(false)
    
    return (
        <CardBoilerplate edit={props.public ? false : true} callback={showModal} title="About">
            <AboutCard description={props.bio} />
            <AboutModal profile={props.profile} show={show} closeFunc={hideModal} refresh={props.refresh} />
        </CardBoilerplate>
    )
}

export default About


const AboutCard = (props) => {
    return (
        <Col className={`${styles.aboutCol} mt-3`}>
            <Row>
                <p>
                    {props.description}
                </p>
            </Row>
        </Col>
    )
}