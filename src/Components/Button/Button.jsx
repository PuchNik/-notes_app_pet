import styles from './Button.module.css'

// eslint-disable-next-line react/prop-types
export default function Button({onClick, children}) {

    return (
        <>
            <div className={styles['button-container']}>
                <button onClick={onClick}>{children}</button>
            </div>
        </>
    )
}