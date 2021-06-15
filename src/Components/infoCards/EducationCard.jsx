import styles from './infoCards.module.css'
import CardBoilerplate from "./Common/CardBoilerplate"
import { Row, Col } from 'react-bootstrap';
import IconBtn from './Common/IconBtn';

const EducationCard = (props) => {
    return (
        <CardBoilerplate add title="Education">
            <EducationCardCard place="Strive School" degree="Full Stack Web Developer MERN, IT" years="2021 - 2021" src="https://media-exp1.licdn.com/dms/image/C4D0BAQFFQIjyDsOK0w/company-logo_100_100/0/1593351903670?e=1631750400&v=beta&t=Z5VOepdFNLxZjBwg4bbfh5VFFJEUssCa9yTLNI8CxUM" />
            <EducationCardCard place="Strive School" degree="Full Stack Web Developer MERN, IT" years="2021 - 2021" src="https://media-exp1.licdn.com/dms/image/C4D0BAQFFQIjyDsOK0w/company-logo_100_100/0/1593351903670?e=1631750400&v=beta&t=Z5VOepdFNLxZjBwg4bbfh5VFFJEUssCa9yTLNI8CxUM" />
            <EducationCardCard place="Strive School" degree="Full Stack Web Developer MERN, IT" years="2021 - 2021" src="https://media-exp1.licdn.com/dms/image/C4D0BAQFFQIjyDsOK0w/company-logo_100_100/0/1593351903670?e=1631750400&v=beta&t=Z5VOepdFNLxZjBwg4bbfh5VFFJEUssCa9yTLNI8CxUM" />
        </CardBoilerplate>
    )
}

export default EducationCard


const EducationCardCard = (props) => {
    return (
        <Col className={styles.educationCol}>
            <Row>
                <div className={`${styles.education} d-flex`}>
                    <img src={props.src} alt="" />
                    <div className="mr-auto">
                        <h3>{props.place}</h3>
                        <p>{props.degree}</p>
                        <p>{props.years}</p>
                    </div>
                    <IconBtn edit />
                </div>
            </Row>
        </Col>
    )
}