import React from 'react'


const CompletedTask = ({ task }) => {
  return (
    <div className='flex flex-row border bg-green-900 border-green-700 w-full h-[50px] py-3 justify-between px-4 my-4'>
    <del className='text-white pl-2'>{task.task}</del>
    </div>
  )
}

export default CompletedTask