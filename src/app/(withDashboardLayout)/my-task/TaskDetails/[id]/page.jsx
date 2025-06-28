"use client"
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import {useUser} from "../../../../../context/UserContext"
import useAxiosPublic from "../../../../../components/useAxiosPublic";

const TasksDetail = () => {
  const { id } = useParams();
  const axiosPublic=useAxiosPublic()
  const { loading } = useUser()
  if (loading) {
    return <div className="flex items-center justify-center ">
      <span className="loading loading-bars  loading-xl"></span>
    </div>
  }

  const [detailsTask, setDetailsTask] = useState({});
  console.log(detailsTask);
  useEffect(() => {
    const fetchDetails = async () => {
      const { data } = await axiosPublic.get(`/task/${id}`);
      setDetailsTask(data)
    }
    fetchDetails()
  },[])
  
  return (
    <div className=" min-h-screen space-y-3 p-5">
      <h1 className="text-3xl  lg:text-4xl font-bold  "> Title: {detailsTask.title}</h1>
      <p className=" "><span className="font-semibold">Description:</span> { detailsTask.description}</p>
    </div>
  );
};

export default TasksDetail;