import styles from '../infoCards.module.css'
import IconBtn from './IconBtn'

const CardBoilerplate = (props) => {
    return (
        <div className={`${styles.infoCard} ${props.secondary && styles.sideCard} ${props.top && styles.topCard}`}>
            <div className="d-flex justify-content-between">
                <h2 className={props.secondary ? styles.secondaryInfoCardHeader : styles.mainInfoCardHeader}>{props.title}</h2>
                <div>
                    {props.textBtn && <TextBtn text={props.textBtn} />}
                    {props.add ? <IconBtn add callback={props.callback && props.callback}/> : props.edit && <IconBtn edit callback={props.callback && props.callback} />}
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