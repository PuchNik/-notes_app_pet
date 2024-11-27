import styles from './Main.module.css';
import Input from "../Input/Input.jsx";
import Button from "../Button/Button.jsx";
import TaskList from "../TaskList/TaskList.jsx";
import { useState } from "react";

export default function Main() {
    const [value, setValue] = useState('');
    const [tasks, setTasks] = useState([]);

    const handleInputChange = (e) => {
        setValue(e.target.value);
    };

    const addTask = () => {
        if (value.trim()) {
            const newTask = {
                id: Date.now(), // Используем timestamp как уникальный ID
                text: value,
                done: false // Изначально задача не выполнена
            };

            setTasks([...tasks, newTask]);
            setValue('');
        }
    };

    const toggleTaskDone = (taskId) => {
        setTasks(prevTasks =>
            prevTasks.map(task =>
                task.id === taskId ? { ...task, done: !task.done } : task
            )
        );
    };

    const toggleDeleteTask = (taskId) => {
        setTasks(prevTask => prevTask.filter(task => task.id !== taskId))
    }

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            addTask()
        }
    }

    return (
        <div className={styles['main']}>
            <Input
                value={value}
                onChange={handleInputChange}
                onKeyDown={handleKeyDown}
            />

            <Button onClick={addTask}>{'Добавить задачу'}</Button>

            {tasks.length === 0 ? (
                <div className={styles['task-text']}>ВАШ СПИСОК ЗАДАЧ ПУСТ</div>
            ) : null}

            <TaskList
                tasks={tasks}
                onDoneTask={toggleTaskDone}
                onDeleteTask={toggleDeleteTask}
            />
        </div>
    );
}
