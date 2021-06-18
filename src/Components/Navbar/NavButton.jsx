import styles from "./NavButton.module.css"

const ProfileButton = (props) => {
    return (
        <button className={`${styles.button} ${props.blue ? styles.buttonBlue : ''} d-none d-md-inline`}>{props.text}</button>
    )
}

export default ProfileButton