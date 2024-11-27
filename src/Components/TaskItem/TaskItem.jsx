import styles from './TaskItem.module.css';
import Button from "../Button/Button.jsx";

// eslint-disable-next-line react/prop-types
export default function TaskItem({ task, onDoneTask, onDeleteTask}) {
    return (
        <li className={styles['task-item']}>
            <span className={styles['task-text']}>{task.id}</span>
            <span className={`${styles['task-text']} ${task.done ? styles['task-underline'] : ''}`}>
                {task.text}
            </span>
            <div className={styles['task-buttons']}>
                <Button onClick={onDoneTask}>{'✔'}</Button>
                <Button onClick={onDeleteTask}>{'✖'}</Button>
            </div>
        </li>
    );
}
