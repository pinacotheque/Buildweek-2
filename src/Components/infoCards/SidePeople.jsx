import styles from './infoCards.module.css'
import CardBoilerplate from "./Common/CardBoilerplate"
import { Row, Col } from 'react-bootstrap';

const SidePeople = (props) => {
    return (
        <CardBoilerplate secondary title={props.title} top={props.top}>
            <SidePeopleCard />
            <SidePeopleCard />
            <SidePeopleCard />
        </CardBoilerplate>
    )
}

export default SidePeople


const SidePeopleCard = (props) => {
    return (
        <div className={`${styles.sidePeople} d-flex`}>
            <img src="https://media-exp1.licdn.com/dms/image/C4E03AQGMGK-x4SJZug/profile-displayphoto-shrink_100_100/0/1517456884067?e=1629331200&v=beta&t=oNzPJtfI2-6OqEQ66G7qM358v602Ivi0HPgjhrn1HpA" alt="" />
            <div>
                <h3>Jwala Baburaj<span>3rd</span></h3>
                <p>AI Engineering Student @ Strive School</p>
                <ConnectBtn />
            </div>
        </div>
    )
}

const ConnectBtn = () => {
    return (
        <button>Connect</button>
    )
}