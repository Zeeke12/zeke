import React, { useState } from 'react'
import TaskPage from './TaskPage';


const Home = () => {
  const [tasks, setTasks ] = useState([]);
  const [task, setTask] = useState('');

  const handleInput = (e) => {
    setTask(e.target.value);
    
  };
  const addTask = () => {
    if (task) {
      setTasks([...tasks, task]);
      localStorage.setItem('task', JSON.stringify(tasks));
      setTask('');
    }
  };

  
  const removeTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1)
    setTasks(updatedTasks)
  }
  const clearTask = () => {
    setTasks([])
  }

  

  
  

  return (
    <div className='flex flex-col mt-10'>
      <h1 className='text-4xl mb-5 text-center'>Task List </h1>
      <div className='flex flex-col border mx-auto px-5 border-green-500 w-[300px] md:w-[1000px] h-fit gap-5'>
        <div className='flex flex-col mt-5  gap-5'>
        <input type="text" placeholder='Add New Task' value={task} onChange={handleInput}  className='px-4 h-10 border border-green-800' />
        <button onClick={addTask} className='bg-green-800 px-2 py-1 w-20 text-white '>Add Task </button>
        </div>
        <div>
          {tasks.length === 0 ? <h1 className='text-4xl mb-5 text-center' >No Task </h1> : <h1 className='text-4xl mb-5 text-center'>Tasks</h1>}
          <div>
          {tasks.map((tas, index) => (<TaskPage key={index} tas={tas} removeTask={removeTask} index={index} />) )}
          </div>
          <div>
            {tasks.length === 0 ? <span></span> : <button className='bg-black text-white px-2 py-1 w-20 my-4' onClick={clearTask}>Clear</button>}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home