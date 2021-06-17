import styles from './infoCards.module.css'
import CardBoilerplate from "./Common/CardBoilerplate"
import { Row, Col } from 'react-bootstrap';

const SkillsEndorsements = (props) => {
    return (
        <CardBoilerplate edit={props.public ? false : true} textBtn={!props.public && "Add a new skill"} title="Skills & endorsements">
            {!props.public && <button className={styles.takeQuizBtn}>Take skill quiz</button>}
            <SkillsEndorsementsCard endorsements="7" title="Responsive Web Design" />
            <SkillsEndorsementsCard endorsements="5" title="JavaScript" />
            <SkillsEndorsementsCard title="React.js" />
        </CardBoilerplate>
    )
}

export default SkillsEndorsements


const SkillsEndorsementsCard = (props) => {
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