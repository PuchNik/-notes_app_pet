import styles from './Input.module.css'


// eslint-disable-next-line react/prop-types
export default function Input({value, onChange, onKeyDown}) {
    return (
        <>
            <div className={styles['input-container']}>
                <input
                    type="text"
                    placeholder="Введите текст..."
                    value={value}
                    onChange={onChange}
                    className={styles['input']}
                    onKeyDown={onKeyDown}
                ></input>
            </div>
        </>
    )
}