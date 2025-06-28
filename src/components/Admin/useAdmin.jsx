import { useQuery } from '@tanstack/react-query';
import useAxiosPublic from '../useAxiosPublic';
import { useUser } from '../../context/UserContext';

const useAdmin = () => {
  const { user } = useUser();
  const axiosPublic = useAxiosPublic();

  const { data: admin, isPending: isAdminLoading, refetch, error } = useQuery({
    queryKey: ['admin', user?.email],
    enabled: !!user?.email,
    queryFn: async () => {
      const res = await axiosPublic.get(`/user/admin/${user.email}`);
      return res?.data?.role;
    },
  });

  return [ admin, isAdminLoading, refetch, error ];
};

export default useAdmin;
