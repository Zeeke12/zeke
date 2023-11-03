import React from 'react'

const TaskPage = ({ tas, removeTask, index }) => {
  return (
    <div className='flex flex-row border border-green-700 w-full h-[50px] py-3 justify-between px-4 my-4'>
            <div><h1 className='text-green-700 whitespace-pre-line overflow-hidden text-ellipsis'>{tas}</h1> </div>
            <button className='text-red-500 text-2xl' onClick={() => removeTask(index)}>X</button>
            </div>
  )
}

export default TaskPage