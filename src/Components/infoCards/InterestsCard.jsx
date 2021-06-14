import CardBoilerplate from "./Common/CardBoilerplate"
import { Row, Col } from 'react-bootstrap'
import styles from './infoCards.module.css'


const InterestsCard = (props) => {
    return (
        <CardBoilerplate title="Interests">
            <Row className="mt-4">
                <InterestsCardCard title="Strive School" followers="1,784 followers" src="https://media-exp1.licdn.com/dms/image/C4D0BAQFFQIjyDsOK0w/company-logo_100_100/0/1593351903670?e=1631750400&v=beta&t=Z5VOepdFNLxZjBwg4bbfh5VFFJEUssCa9yTLNI8CxUM" />
                <InterestsCardCard title="Strive School" followers="1,784 followers" src="https://media-exp1.licdn.com/dms/image/C4D0BAQFFQIjyDsOK0w/company-logo_100_100/0/1593351903670?e=1631750400&v=beta&t=Z5VOepdFNLxZjBwg4bbfh5VFFJEUssCa9yTLNI8CxUM" />
                <InterestsCardCard title="Strive School" followers="1,784 followers" src="https://media-exp1.licdn.com/dms/image/C4D0BAQFFQIjyDsOK0w/company-logo_100_100/0/1593351903670?e=1631750400&v=beta&t=Z5VOepdFNLxZjBwg4bbfh5VFFJEUssCa9yTLNI8CxUM" />
                <InterestsCardCard title="Strive School" followers="1,784 followers" src="https://media-exp1.licdn.com/dms/image/C4D0BAQFFQIjyDsOK0w/company-logo_100_100/0/1593351903670?e=1631750400&v=beta&t=Z5VOepdFNLxZjBwg4bbfh5VFFJEUssCa9yTLNI8CxUM" />
            </Row>
        </CardBoilerplate>
    )
}

export default InterestsCard


const InterestsCardCard = (props) => {
    return (
        <Col xs={6}>
            <div className={`${styles.interests} d-flex`}>
                <img src={props.src} alt="" />
                <div>
                    <h3>{props.title}</h3>
                    <p>{props.followers}</p>
                </div>
            </div>
        </Col>
    )
}