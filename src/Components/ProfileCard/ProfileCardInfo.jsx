import styles from "./ProfileCard.module.css"

const ProfileCardInfo = (props) => {
    return (
        <div>
            <div>
                <h1 className={styles.nameText}>{props.name}</h1>
            </div>
            <div className={styles.aboutText}>
                {props.about}
            </div>
            <div className={styles.location}>
                <span className={styles.locationText}>{props.location}</span>
                <span className={styles.contactText}>
                    <a href="/" className={styles.blueLink}>Contact Info</a>
                </span>
            </div>
        </div>
    )
}

export default ProfileCardInfo