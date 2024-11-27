import styles from './TaskList.module.css';
import TaskItem from "../TaskItem/TaskItem.jsx";

// eslint-disable-next-line react/prop-types
export default function TaskList({ tasks, onDoneTask, onDeleteTask }) {
    return (
        <ul className={styles['task-list']}>
            {tasks.map((task) => (
                <TaskItem
                    key={task.id}
                    task={task}
                    onDoneTask={() => onDoneTask(task.id)}
                    onDeleteTask={() => onDeleteTask(task.id)}
                />
            ))}
        </ul>
    );
}
