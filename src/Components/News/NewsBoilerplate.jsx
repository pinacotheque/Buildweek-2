import styles from './News.module.css'
import IconBtn from './IconBtn'

const NewsBoilerplate = (props) => {
    return (
        <div class={`${styles.infoCard} ${props.secondary && styles.sideCard} ${props.top && styles.topCard}`}>
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

export default NewsBoilerplate


const TextBtn = (props) => {
    return (
        <button className={styles.textBtn}>{props.text}</button>
    )
}