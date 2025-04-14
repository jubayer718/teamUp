"use client"

import { closestCenter, DndContext, PointerSensor, TouchSensor, useSensor, useSensors } from "@dnd-kit/core";
import { io } from "socket.io-client";
import Column from './Column/Column';
import {useEffect, useState } from "react";
import useAxiosPublic from "../useAxiosPublic";
import Swal from "sweetalert2";
import { useUser } from "../../context/UserContext";

const socket = io("http://localhost:5000/", {
  transports: ["websocket", "polling"],
  // withCredentials: true,
  extraHeaders: {
    "Access-Control-Allow-Origin": "*"
  }
})

const COLUMNS = [
  { id: 'TODO', title: 'To Do' },
  { id: 'IN_PROGRESS', title: 'In Progress' },
  { id: 'DONE', title: 'Done' },
];





const Tasks = () => {
  const { user, loading } = useUser();
  if (loading) {
    return <p>loading...</p>
  }
  // console.log(user);
  const axiosPublic = useAxiosPublic();
  const [tasks, setTasks] = useState([]);
  console.log(tasks);

 useEffect(() => {
   const fetchAllData = async() => {
      try {
        const { data } = await axiosPublic.get(`/allTask/${user.email}`);
        setTasks(data)
        // console.log(data);
      } catch (error) {
        Swal.fire(error.message)
      }
    }
    fetchAllData()
    // ✅get realtime update data from server
    socket.on("task_added", (newTask) => {
      setTasks((prevTasks) => [...prevTasks, newTask]);
    });

    socket.on("task_updated", (updatedTask) => {
      setTasks((prevTasks) =>
        prevTasks.map((task) =>
          task._id === updatedTask._id ? { ...task, ...updatedTask } : task
        )
      );
    });

    socket.on("task_deleted", (taskId) => {
      setTasks((prevTasks) => prevTasks.filter((task) => task._id !== taskId));
    });

   

    return () => {
      socket.off("task_added");
      socket.off("task_updated");
      socket.off("task_deleted");
   };
   
   
 }, []);
  
  function handleDragEnd(event) {
    const { active, over } = event;
    if (!over) return;

    const taskId = active.id;
    const newStatus = over.id;

    // ✅ update to local state (Optimistic UI)
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task._id === taskId ? { ...task, status: newStatus } : task
      )
    );

    // ✅ send new status to server
    socket.emit("update_task", { taskId, status: newStatus });
  }
  const sensors = useSensors(
  useSensor(PointerSensor, {
    activationConstraint: {
      distance: 5,
    },
  }),
  useSensor(TouchSensor, {
    activationConstraint: {
      delay: 300, 
      tolerance: 10,
    },
  })
);
  return (
    <div className="p-4 mt-16">
      <div className="flex flex-col lg:flex-row  gap-8">
      
        <DndContext collisionDetection={closestCenter} sensors={sensors} onDragEnd={handleDragEnd}>
          {COLUMNS.map((column) => {
            return (
              <Column
              key={column.id}
              column={column}
              tasks={tasks.filter((task) => task.status === column.id)}
            />
           )
          })}
      </DndContext>
      </div>
       
    </div>
  );
};

export default Tasks;