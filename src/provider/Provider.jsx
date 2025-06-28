"use client";
import UserProvider from "../context/UserContext";
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'



const queryClient = new QueryClient()


const Providers = ({ children }) => {
  return (

       
    <UserProvider>

      <QueryClientProvider client={queryClient}>

          {children}
      </QueryClientProvider>

    </UserProvider>
        

  );
};

export default Providers;
