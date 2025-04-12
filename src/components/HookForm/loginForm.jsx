"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { z } from "zod";
import Social from "../social_googleLogin/Social";
import useAxiosPublic from "../useAxiosPublic";
import { useUser } from "../../context/UserContext";

// Dynamically import Lottie so it only runs on the client side
import dynamic from "next/dynamic";
const Lottie = dynamic(() => import("lottie-react"), { ssr: false }); // Disable SSR

import LottieLogin from "../../app/assets/lottie/login.json";

// ✅ Zod Validation Schema
const schema = z.object({
  email: z.string().email("Invalid email format"),
  password: z
    .string()
    .min(6, "Password must be at least 6 characters")
    .max(20, "Password must not exceed 20 characters")
    .regex(
      /(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])/,
      "Password must include an uppercase letter, a lowercase letter, a number, and a special character"
    ),
});

const LoginForm = () => {
  const {handleForgetPassword}=useUser()
  const { userLogin, setUser } = useUser();
  const axiosPublic = useAxiosPublic();
  const router = useRouter();

  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data) => {
    try {
      const { email, password } = data;
      const result = await userLogin(email, password);
      const user = result.user;
      setUser(user); // ✅ Update user state

      Swal.fire({
        title: "User Login Successful!",
        icon: "success",
        timer: 1500,
        showConfirmButton: false,
      });

      router.push("/");
    } catch (error) {
      console.error("Login failed:", error);
      Swal.fire({
        title: "Login Failed!",
        text: error.message,
        icon: "error",
      });
    }
  };

  const handlePasswordChange = async() => {
    const email = getValues("email");
    console.log(email);
    if (!email) {
      return Swal.fire('Please Enter your email first')
    }
    try {
      await handleForgetPassword(email);
       Swal.fire(
      "Password Reset Email Sent!",
      "Check your inbox and follow the instructions.",
      "success"
    );
    } catch (error) {
      Swal.fire("Failed to send reset email", error.message, "error");
    }
  }

  return (
    <div className="mx-auto mt-16 flex justify-center items-center flex-col lg:flex-row-reverse w-screen h-screen gap-8">
      {/* ✅ Lottie Animation */}
      <div className="text-center lg:text-left w-96">
        <Lottie animationData={LottieLogin} />
      </div>

      {/* ✅ Login Form */}
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <div className="card-body">
          <h1 className="text-center text-xl font-bold">Welcome To Login</h1>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="fieldset space-y-4"
          >
            {/* Email Field */}
            <label className="fieldset-label">Email</label>
            <input
              {...register("email")}
              type="email"
              className="input"
              placeholder="Email"
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email.message}</p>
            )}

            {/* Password Field */}
            <label className="fieldset-label">Password</label>
            <input
              {...register("password")}
              type="password"
              className="input"
              placeholder="Password"
            />
            {errors.password && (
              <p className="text-red-500 text-sm">{errors.password.message}</p>
            )}

            {/* Forgot Password */}
            <div>
              <button type="button" onClick={handlePasswordChange} className="link link-hover">Forgot password?</button>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="btn w-full bg-[#690031] text-white mt-4"
            >
              Login
            </button>
          </form>

          {/* Register Link */}
          <p className="text-center text-lg mt-2">
            Don't have an account?{" "}
            <Link href="/register">
              <button className="text-blue-500 font-bold cursor-pointer">
                Register
              </button>
            </Link>
          </p>

          {/* Google Login */}
          <div>
            <Social />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
