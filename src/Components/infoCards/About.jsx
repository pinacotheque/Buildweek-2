import styles from './infoCards.module.css'
import CardBoilerplate from "./Common/CardBoilerplate"
import { Row, Col } from 'react-bootstrap';

const About = (props) => {
    return (
        <CardBoilerplate edit title="About">
            <AboutCard description="hello /n how are you" />
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