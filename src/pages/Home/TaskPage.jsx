import React from 'react'

const TaskPage = ({ tas, removeTask, index, comp }) => {
  return (
    <div className='flex flex-row border border-green-700 w-full h-[50px] py-3 justify-between px-4 my-4'>
            <div><h1 className={comp}>{tas}</h1> </div>
            <div>
            <button className='text-red-500 text-2xl' onClick={() => removeTask(index)}>X</button>
            </div>
            </div>
  )
}

export default TaskPage