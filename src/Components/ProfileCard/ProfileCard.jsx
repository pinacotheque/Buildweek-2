import styles from "./ProfileCard.module.css"
import ProfileButton from "./ProfileButton"
import ProfileCardInfo from './ProfileCardInfo';
import { useState } from "react";
import ProfileModalImg from "./ProfileModalImg";
import ProfileModal from "../ProfileModal/ProfileModal";

const ProfileCard = (props) => {

    return (
        <section className={styles.profileCard}>
            <Cover />
            <div className={styles.profileAbout}>
                <Avatar src={props.img} />
                <div className="d-flex justify-content-between pt-2">
                    <ProfileCardInfo name={props.name} about={props.about} location={props.location} />
                    <div className={styles.rightPanel}>
                        <ul>
                            <RightPanelItem title="Strive School" img="https://media-exp1.licdn.com/dms/image/C4D0BAQFFQIjyDsOK0w/company-logo_100_100/0/1593351903670?e=1631750400&v=beta&t=Z5VOepdFNLxZjBwg4bbfh5VFFJEUssCa9yTLNI8CxUM" />
                        </ul>
                    </div>
                </div>
                <div className="my-2">
                    <a href="/" className={styles.blueLink}>2 connections</a>
                </div>
                <div className="mt-2">
                    <ProfileButton text="Open to" blue/>
                    <ProfileButton text="Add section"/>
                    <ProfileButton text="More"/>
                </div>
            </div>
            <div className={`${styles.carousel} d-flex`}>
                <CarouselCard edit title="Open to work" text="Web Developer and Software Associate roles"/>
                <CarouselCard title="Share that you're hiring" text="and attract qualified candidates." />
            </div>
        </section>
    )
}

export default ProfileCard


const CarouselCard = (props) => {
    return (
        <div className={`${styles.carouselCard} ${props.edit ? styles.editCard : ''}`}>
            <div className="d-flex">
                <a href="/">
                    <div className={styles.carouselCardText}>
                            <h3 className={styles.carouselCardHeader}>{props.title}</h3>
                            <p className={styles.carouselCardText}>{props.text}</p>
                            <p className={styles.blueLink}>{props.edit ? 'See all details' : 'Get started'}</p>
                    </div>
                </a>
                <div className="ml-auto">
                    <div className={styles.carCardButton}>
                        <a href="/">
                            {
                                props.edit
                                ?
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" data-supported-dps="16x16" fill="currentColor" className="mercado-match" width="16" height="16" focusable="false">
                                    <path d="M14.13 1.86a3 3 0 00-4.17 0l-7 7L1 15l6.19-2 6.94-7a3 3 0 000-4.16zm-8.36 9.71l-1.35-1.34L9.64 5 11 6.35z"></path>
                                </svg>
                                :
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" data-supported-dps="16x16" fill="currentColor" className="mercado-match" width="16" height="16" focusable="false">
                                    <path d="M14 3.41L9.41 8 14 12.59 12.59 14 8 9.41 3.41 14 2 12.59 6.59 8 2 3.41 3.41 2 8 6.59 12.59 2z"></path>
                                </svg>
                            }
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}


const RightPanelItem = (props) => {
    return (
        <li>
            <a href="/" className="d-flex">
                <img src={props.img} alt="" />
                <h2 className="align-self-center">{props.title}</h2>
            </a>
        </li>
    )
}

const Avatar = (props) => {

    const [show, setShow] = useState(false)
    const [profileModal, setShowProfileModal] = useState(false)

    const showModal = () => setShow(true)
    const hideModal = () => setShow(false)

    const showProfileModal = () => setShowProfileModal(true)
    const hideProfileModal = () => setShowProfileModal(false)

    return (
        <div className="d-flex justify-content-between">
            <div className={styles.avatarHolder} onClick={showModal}>
                <div className={styles.avatarCircle}>
                    <img src={props.src} alt="" />
                </div>
            </div>
            <div className={styles.edit}>
                <button onClick={showProfileModal}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" className="mercado-match" width="24" height="24" focusable="false">
                        <path d="M21.13 2.86a3 3 0 00-4.17 0l-13 13L2 22l6.19-2L21.13 7a3 3 0 000-4.16zM6.77 18.57l-1.35-1.34L16.64 6 18 7.35z"></path>
                    </svg>
                </button>
            </div>
            <ProfileModal closeFunc={hideProfileModal} show={profileModal} />
            <ProfileModalImg show={show} close={hideModal} />
        </div>
    )
}

const Cover = (props) => {
    return (
        <div className={styles.coverDiv}>
            <img src={props.src ? props.src : "https://static-exp1.licdn.com/sc/h/9e0ckeb27mzi70ne80f4hv7il"} alt="" />
            <button className={styles.coverBtn}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" data-supported-dps="16x16" fill="currentColor" className="mercado-match" width="16" height="16" focusable="false">
                    <path d="M10 9a2 2 0 11-2-2 2 2 0 012 2zm5-2.5V14H1V6.5A2.5 2.5 0 013.5 4h.75L5 2h6l.75 2h.75A2.5 2.5 0 0115 6.5zM11 9a3 3 0 10-3 3 3 3 0 003-3z"></path>
                </svg>
            </button>
        </div>
    )
}