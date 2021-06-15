import styles from "./NavButton.module.css"

const ProfileButton = (props) => {
    return (
        <button className={`${styles.button} ${props.blue ? styles.buttonBlue : ''}`}>{props.text}</button>
    )
}

export default ProfileButton