import styles from '../infoCards.module.css'
import CardBoilerplate from "../Common/CardBoilerplate"
import { Link } from 'react-router-dom'

const SidePeople = (props) => {
    return (
        <CardBoilerplate secondary title={props.title} top={props.top}>
            {
                props.people && props.people.map(person => <SidePeopleCard key={person._id} {...person} top={props.top} />)
            }
        </CardBoilerplate>
    )
}

export default SidePeople


const SidePeopleCard = (props) => {
    return (
        <Link to={`/in/${props._id}`}>
            <div className={`${styles.sidePeople} d-flex`}>
                <img src={props.image} onError={(e) => e.target.src = "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png"} alt="" />
                <div>
                    <h3>{props.name} {props.surname}{props.top && <span>3rd</span>}</h3>
                    <p>{props.title}</p>
                    <ConnectBtn id={props._id} />
                </div>
            </div>
        </Link>
    )
}

const ConnectBtn = (props) => {
    return (
        <Link to={`/in/${props.id}`}>
            <button>Connect</button>
        </Link>
    )
}