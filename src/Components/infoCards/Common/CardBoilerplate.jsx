import styles from '../infoCards.module.css'
import IconBtn from './IconBtn'

const CardBoilerplate = (props) => {
    return (
        <div class={styles.infoCard}>
            <div className="d-flex justify-content-between">
                <h2 className={props.secondary ? styles.secondaryInfoCardHeader : styles.mainInfoCardHeader}>{props.title}</h2>
                <div>
                    {props.textBtn && <TextBtn text={props.textBtn} />}
                    {props.add ? <IconBtn add /> : props.edit && <IconBtn edit />}
                </div>
            </div>
            {props.children}
        </div>
    )
}

export default CardBoilerplate


const TextBtn = (props) => {
    return (
        <button className={styles.textBtn}>{props.text}</button>
    )
}