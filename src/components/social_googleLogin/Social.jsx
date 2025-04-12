import { useRouter } from "next/navigation";

import { FcGoogle } from "react-icons/fc";
import Swal from "sweetalert2";
import useAxiosPublic from "../useAxiosPublic";
import { useUser } from "../../context/UserContext";
// import useAxiosPublic from "../Hook/useAxiosPublic";

const Social = () => {
  const { setUser, signInWithGoogle } = useUser()
  const axiosPublic = useAxiosPublic();
  const router = useRouter();

  const handleGoogleSignIn = async () => {
    Swal.fire({
      title: "Signing in...",
      text: "Please wait while we log you in.",
      allowOutsideClick: false,
      didOpen: () => {
        Swal.showLoading();
      },
    });

    try {
      const result = await signInWithGoogle();
      const user = result.user;
      setUser(user);

      const userInfo = {
        email: user?.email,
        name: user?.displayName,
      };

      await axiosPublic.post("users", userInfo);

      Swal.fire({
        title: "Success!",
        text: "Logged in with Google successfully!",
        icon: "success",
        timer: 2000,
        showConfirmButton: false,
      });

      router.push("/");
    } catch (error) {
      Swal.fire({
        title: "Google Sign-In Failed",
        text: error.message,
        icon: "error",
      });
    }
  };
  return (
    <div>
      <div>
        <button
          onClick={handleGoogleSignIn}
          className="btn w-full my-3 mx-auto text-xl p-2 font-semibold text-center "
        >
          <FcGoogle></FcGoogle>
          Sign In With Google
        </button>
      </div>
    </div>
  );
};

export default Social;
