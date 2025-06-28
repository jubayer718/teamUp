"use client"
import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAxiosPublic from '../useAxiosPublic';
import { useUser } from '../../context/UserContext';

const useTasks = () => {
  const {user}=useUser()
  const axiosPublic=useAxiosPublic()
  const { refetch, data: tasks = [] } = useQuery({
    queryKey: ['tasks'],
    queryFn: async() => {
      const res = await axiosPublic.get(`/allTask/${user?.email}`)
      return res.data
    },
    
  })
  return [refetch,tasks]
};

export default useTasks;