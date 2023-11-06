import React, { useContext } from 'react'
import { TaskContext } from '../../db/TaskContext'

const TaskPage = ({ task, index }) => {
  const { markTask, removeTask} = useContext(TaskContext)
  return (
    <div className='flex flex-row border border-green-700 w-full h-[50px] py-3 justify-between px-4 my-4'>
            <div className='flex flex-row'>         
            <input type="checkbox" name="" id="" onClick={() => markTask(index)} />
            <h1 className='text-green-500 pl-2'>{task.task}</h1> </div>
            <div>
            <button className='text-red-500 text-2xl' onClick={() => removeTask(index)}>X</button>
            </div>
            </div>
  )
}

export default TaskPage