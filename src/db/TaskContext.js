import { createContext } from 'react'
import { useState } from 'react';
import { useEffect } from 'react';

export const TaskContext = createContext();

export const TaskContextProvider = (props) => {

    const [tasks, setTasks ] = useState([]);
    const [task, setTask] = useState('')

  useEffect(() => {
    const storedTasks = localStorage.getItem('tasks');
    if (storedTasks !== null) {
      setTasks(JSON.parse(storedTasks));
    }
  }, []);
  
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const handleInput = (e) => {
    const value = e.target.value;
    setTask(value);    
  };

  const addTask = () => {
    if (task) {
      const newTasks = [...tasks, task];
      setTasks(newTasks);
      localStorage.setItem('tasks', JSON.stringify(newTasks));
        setTask('');
    }
  };
  
  const removeTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  const clearTask = () => {
    setTasks([])
  }

    const contextValue = {task, tasks, handleInput, addTask, removeTask, clearTask}

    return (
        <TaskContext.Provider value={contextValue}>
            {props.children}
        </TaskContext.Provider>
      )
}