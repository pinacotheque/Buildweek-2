import styles from './infoCards.module.css'
import CardBoilerplate from "./Common/CardBoilerplate"
import { Row, Col } from 'react-bootstrap';
import IconBtn from './Common/IconBtn';
import { useState, useEffect } from 'react'
import ExpEduForm from '../ExpEduForm'

const Experience = (props) => {

    const [show, setShow] = useState(false)
    const [experiences, setExperiences] = useState(null)
    const [edit, setEdit] = useState(null)

    const showModal = () => setShow(true)
    const hideModal = () => setShow(false)

    useEffect(() => {
        fetchExperiences()
    }, [])

    const fetchExperiences = async () => {
        const response = await fetch(`https://striveschool-api.herokuapp.com/api/profile/${localStorage.getItem('myId')}/experiences`, {
            headers: {
                "Authorization": "Bearer " + localStorage.getItem('token')
            }
        })
        if(response.ok) {
            const data = await response.json()
            setExperiences(data)
        } else {
            console.log('error with fetching experiences')
        }
    }

    return (
        <CardBoilerplate add title="Experience" callback={showModal}>
            {
                experiences && experiences.map(exp => <ExperienceCard key={exp._id} {...exp} edit={() => {setEdit(exp); showModal()}}/>)
            }
            {show && <ExpEduForm show={show} closeFunc={hideModal} edit={edit && edit} reload={fetchExperiences} />}
        </CardBoilerplate>
    )
}

export default Experience


const ExperienceCard = (props) => {
    return (
        <Col className={styles.experienceCol}>
            <Row>
                <div className={`${styles.experience} d-flex`}>
                    <img src={props.image} alt="" />
                    <div className="mr-auto">
                        <h3>{props.role}</h3>
                        <p>{props.company}{props.workTime && <span>{props.workTime}</span>}</p>
                        {(props.startDate && props.endDate) && <h4>{props.startDate} - {props.endDate}</h4>}
                        {props.area && <h4>{props.area}</h4>}
                        {props.description && <p>{props.description}</p>}
                    </div>
                    <IconBtn edit callback={props.edit && props.edit} />
                </div>
            </Row>
        </Col>
    )
}