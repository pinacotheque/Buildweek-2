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
        <CardBoilerplate edit callback={showModal} title="About">
            <AboutCard description={props.bio} />
            <AboutModal profile={props.profile} show={show} closeFunc={hideModal} refresh={props.refresh} />
        </CardBoilerplate>
    )
}

export default About


const AboutCard = (props) => {
    return (
        <Col className={styles.aboutCol}>
            <Row>
                <p>
                    {props.description}
                </p>
            </Row>
        </Col>
    )
}