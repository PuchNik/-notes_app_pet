import styles from './Header.module.css'


export default function Header() {
    return (
        <>
            <div className={styles['header']}>
                <div className={styles['header-text']}>ЗАМЕТКИ</div>
            </div>
        </>
    )
}