import { createContext } from 'react'
import { useState } from 'react';
import { useEffect } from 'react';

export const TaskContext = createContext();

export const TaskContextProvider = (props) => {

    const [tasks, setTasks ] = useState([]);
    const [task, setTask] = useState('');
    const [completedTasks, setCompletedTasks] = useState([]);
    let incompleteTasks = tasks.filter((task) => !task.completed);


    useEffect(() => {

    }, [])
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
      const newTasks = [...tasks, { task: task, completed: false}];
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

  const markTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;

    // Remove the completed task from the `tasks` array
    const incompleteTasks = updatedTasks.filter((task) => !task.completed);

    // Add the completed task to the `completedTasks` array
    const completedTask = updatedTasks[index];
    completedTasks.push(completedTask);

    setTasks(incompleteTasks);
  };
  const moveCompletedTasks = () => {
    // Filter completed tasks
    const completedTasks = tasks.filter((task) => task.completed);

    // Filter incomplete tasks
    const incompleteTasks = tasks.filter((task) => !task.completed);

    // Update state variables
    setTasks(incompleteTasks);
    setCompletedTasks(completedTasks);
  };



  const clearTask = () => {
    setTasks([])
  }

    const contextValue = {task, tasks, handleInput, addTask, removeTask, clearTask, markTask, completedTasks, incompleteTasks, moveCompletedTasks}

    return (
        <TaskContext.Provider value={contextValue}>
            {props.children}
        </TaskContext.Provider>
      )
}