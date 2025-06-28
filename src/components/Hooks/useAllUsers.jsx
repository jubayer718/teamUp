import { useQuery } from '@tanstack/react-query'
import useAxiosPublic from '../useAxiosPublic';

const useAllUsers = () => {
  const axiosPublic=useAxiosPublic()
  const { data: users = [] } = useQuery({
    queryKey: ['users'],
    queryFn: async () => {
      const res = await axiosPublic.get('/allUser');
      return res.data
    }
  });
  return [users];
};

export default useAllUsers;