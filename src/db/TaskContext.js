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
      console.log(localStorage)
    }, [])
    useEffect(() => {
    const storedTasks = localStorage.getItem('tasks');
    if (storedTasks !== null) {
      setTasks(JSON.parse(storedTasks));
    }
  }, []);

  useEffect(() => {
    const storedCompletedTasks = localStorage.getItem('completedTasks')
    if (storedCompletedTasks !== null) {
      setCompletedTasks(JSON.parse(storedCompletedTasks));
    }
  }, [])

  
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  useEffect(() => {
    localStorage.setItem('completedTasks', JSON.stringify(completedTasks));
  }, [completedTasks]);

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
  const incompleteTasks = updatedTasks.filter((task) => !task.completed);
    const completedTask = updatedTasks[index];
  completedTasks.push(completedTask);
  console.log(completedTasks)
  localStorage.setItem('completedTasks', JSON.stringify(completedTasks));
  setTasks(incompleteTasks);
  setCompletedTasks(completedTasks);
  };
  
  const clearCompletedTask = () => {
    setCompletedTasks([ ]);
  }



  const clearTask = () => {
    setTasks([])
  }

    const contextValue = {task, tasks, handleInput, addTask, removeTask, clearTask, markTask, completedTasks, incompleteTasks, clearCompletedTask}

    return (
        <TaskContext.Provider value={contextValue}>
            {props.children}
        </TaskContext.Provider>
      )
}