import React from 'react'
import { FcGoogle } from "react-icons/fc";


export default function GoogleLogin() {
  return (
    <div>
        <div className='divider'></div>
        <div className='border rounded-2xl jus'>
            <h1 className='flex text-xl p-2 items-center gap-2 font-semibold text-center justify-center'><FcGoogle className='text-xl' />Login with Google </h1>
        </div>
    </div>
  )
}
