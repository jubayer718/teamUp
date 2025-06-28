"use client"

import { usePathname, useRouter } from "next/navigation";
import {useUser} from "../../context/UserContext"
import useAdmin from "../Admin/useAdmin"

const AdminRoute = ({ children }) => {

  const pathname = usePathname();
  const router = useRouter();

  const { user, loading } = useUser();
  const [admin, isAdminLoading] = useAdmin();

  if (!user&&!admin) {
    router.replace(`/?from=${pathname}`)
  }
   if (loading,isAdminLoading ) {
    return (
      <div className='flex items-center justify-center my-12'>
        <progress className="progress w-56" />
      </div>
    );
  }

  if (user&&admin) {
    return <>{ children}</>
  }

  return null
};

export default AdminRoute;