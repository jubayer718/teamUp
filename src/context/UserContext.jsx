"use client"
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { createContext, useContext, useEffect, useState } from "react";
import useAxiosPublic from "../components/useAxiosPublic";
import app from "../firebase.init";

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

 const UserContext= createContext(undefined);

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  // console.log(user);
  const [loading, setLoading] = useState(true);
  const axiosPublic = useAxiosPublic();

  // console.log(user);

  const createNewUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password)
  };

  const userLogin = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const signInWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider)
  };

  const logOut = () => {
    setLoading(true);
    return signOut(auth)
  };

  const updateUserProfile = (updatedData) => {
    return updateProfile(auth.currentUser, updatedData);
  };
  const handleForgetPassword = (email) => {
    setLoading(true)
    return sendPasswordResetEmail(auth, email);
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false)
      if (currentUser) {
        const userInfo = { email: currentUser.email };
        axiosPublic.post("/jwt", userInfo).then((res) => {
          if (res.data.token) {
            localStorage.setItem("access-token", res.data.token);
            setLoading(false);
          }
        });
      } else {
        localStorage.removeItem("access-token");
        setLoading(false);
      }
    });
    return () => {
      unsubscribe();
       
    };
  }, [axiosPublic]);

  const authInfo = {  
    user ,
    setUser,
    createNewUser,
    logOut,
    userLogin,
    loading,
    signInWithGoogle,
    updateUserProfile,
    handleForgetPassword
  };

    return <UserContext.Provider value={authInfo}>
        {children}
    </UserContext.Provider>

}


export const useUser=()=>{
    const context =useContext(UserContext);
    if(context === undefined){
        throw new Error("useUser must be used within in UserProvider")
    }
    return context
}


export default UserProvider;