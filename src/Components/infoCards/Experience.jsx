import styles from './infoCards.module.css'
import CardBoilerplate from "./Common/CardBoilerplate"
import { Row, Col } from 'react-bootstrap';

const Experience = (props) => {
    return (
        <CardBoilerplate add title="Experience">

        </CardBoilerplate>
    )
}

export default Experience


const ExperienceCard = (props) => {
    return (
        <Col className={styles.skillsCol}>
            <Row>
                <div>
                    <p>{props.title}{props.endorsements && <span>{`${props.endorsements}`}</span>}</p>
                    {
                        props.endorsements && <p><strong>Someone and {props.endorsements} connections</strong> have given endorsements for this skill</p>
                    }
                </div>
            </Row>
        </Col>
    )
}