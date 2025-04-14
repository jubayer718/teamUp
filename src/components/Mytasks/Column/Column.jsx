"use client"
import { useDroppable } from '@dnd-kit/core';
import TaskCard from './../TaskCard/TasksCard'
const Column = ({ column, tasks }) => {
// console.log(column,tasks);
  const { setNodeRef } = useDroppable({
    
    id: column.id,
  })
  return (
    <div>
      <div className='flex flex-col lg:w-[300px] bg-neutral-800 p-4'>
        <h2 className="mb-4 font-semibold text-neutral-100">{column.title}</h2>
        <div>
           <div ref={setNodeRef} className="flex flex-1 flex-col gap-4">
        {tasks.map((task) => {
          return <TaskCard key={task._id} task={task} />;
        })}
      </div>
        </div>

      </div>
    </div>
  );
};

export default Column;