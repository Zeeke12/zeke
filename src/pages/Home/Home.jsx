import React, { useContext } from 'react'
import TaskPage from './TaskPage';
import { TaskContext } from '../../db/TaskContext';
import CompletedTask from './CompletedTask';


const Home = () => { 
  const { task, tasks, handleInput, addTask, clearTask, incompleteTasks,  completedTasks, clearCompletedTask } = useContext(TaskContext);
 
  

  return (
    <div className='flex flex-col mt-10'>
      <h1 className='text-3xl md:text-7xl mb-5 text-center '>Task List By Zeke </h1>
      <div className='flex flex-col border mx-auto px-5 border-green-500 w-[300px] md:w-[1000px] h-fit gap-5'>
        <div className='flex flex-col mt-5 gap-5'>
        <input type="text" placeholder='Add New Task' value={task} onChange={handleInput} onSubmit={addTask}  className='px-4 h-10 border border-green-800' />
        
        <div>{task.length < 3 ? <button className='bg-green-400 px-4 py-1 cursor-not-allowed text-white '>Add Task</button> :
        <button onClick={addTask} className='bg-green-800 px-4 py-1 text-white '>Add Task </button>}
        </div>
        </div>
        <div>
          {tasks.length === 0 ? <h1 className='text-2xl md:text-4xl mb-5 text-center' >No Upcoming Task </h1> : <h1 className='text-2xl md:text-4xl mb-5 text-center'>Tasks</h1>}
          <div>
          {incompleteTasks.map((task, index) => (
          <TaskPage key={index}
            task = {task} index={index}
          />
        ))}
          </div>
          <div>
            {tasks.length === 0 ? <span></span> : <button className='bg-black text-white px-2 py-1 w-20 my-4' onClick={clearTask}>Clear</button>}
          </div>
          <div>
          {completedTasks.length === 0 ? <h1 className='text-2xl md:text-4xl mb-5 text-center' > </h1> : <h1 className='text-2xl md:text-4xl mb-5 text-center'>Completed Tasks</h1>}
        {completedTasks.map((task, index) => (
          <CompletedTask key={index} 
            task={task} index={index}
          />
        ))}
          </div>
          <div>
            {completedTasks.length === 0 ? <span></span> : <button className='bg-black text-white px-2 py-1 w-20 my-4' onClick={clearCompletedTask}>Clear</button>}
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default Home