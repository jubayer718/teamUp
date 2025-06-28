import React from 'react';
import { useQuery } from '@tanstack/react-query';
import {useUser} from '../../context/UserContext'
import useAxiosPublic from '../useAxiosPublic';

const useProjects = () => {
  const axiosPublic = useAxiosPublic();
  const { data: project = [], refetch } = useQuery({
    queryKey: ['project'],
    queryFn: async () => {
      const res = await axiosPublic.get(`/projects`);
      return res.data;
    }
  })
  return [project, refetch]
};

export default useProjects;