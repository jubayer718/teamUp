import { useDraggable } from '@dnd-kit/core';
import React from 'react';
import useAxiosPublic from '../../useAxiosPublic';
import Swal from 'sweetalert2';
import Link from 'next/link';


const TasksCard = ({ task }) => {
  const axiosPublic=useAxiosPublic()
  
// console.log(task);
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: task._id,
  });


   const style = transform
    ? {
      transform: `translate(${transform.x}px, ${transform.y}px)`,
    }
    : undefined;
  const handleDelete = async(id) => {
  
   Swal.fire({
  title: "Are you sure?",
  text: "You won't be able to revert this!",
  icon: "warning",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "Yes, delete it!"
}).then(async(result) => {
  if (result.isConfirmed) {
    const { data } = await axiosPublic.delete(`/task/${id}`)
    if (data.deletedCount) {
      
    Swal.fire({
      title: "Deleted!",
      text: "Your file has been deleted.",
      icon: "success"
    });
    }

  }
});
  }
  
  return (
     <div className='touch-none select-none cursor-grab'>
      <div
        ref={setNodeRef}
        {...listeners}
        {...attributes}
        className="cursor-grab rounded-lg bg-neutral-700 p-4 shadow-sm hover:shadow-md flex flex-col lg:flex-row items-center justify-between"
        style={style}
      >
        <div>
          <h3 className="font-medium text-neutral-100">{task.title.slice(0, 50)}...</h3>
          <p className="mt-2 text-sm text-neutral-400">{task.description.slice(0, 200)}...</p>
         <div className='flex items-center justify-center my-5'> <button className='btn'>{task.status}</button></div>
        </div>
        <div className='flex lg:flex-col gap-2'>
          <Link href={`my-task/UpdateTask/${task._id}`}><button className='btn'>Edit</button></Link>

          <Link href={`/my-task/TaskDetails/${task._id}`}><button className='btn'>Details</button></Link>
        <button onClick={()=>handleDelete(task._id)} className='btn'>delete</button>
        </div>
      </div>


    </div>
  );
};

export default TasksCard;