"use client"
import { zodResolver } from "@hookform/resolvers/zod";
import dynamic from "next/dynamic";
 // Avoid direct Lottie import here
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2"; 
import { z } from "zod";
import Social from "../social_googleLogin/Social";
import useAxiosPublic from "../useAxiosPublic";
import { useUser } from "../../context/UserContext";
import lottieRegister from "../../app/assets/lottie/register.json";
import Link from "next/link";
const LottieAnimation = dynamic(() => import("lottie-react"), { ssr: false });

const schema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email format"),
  password: z
    .string()
    .min(6, "Password must be at least 6 characters")
    .max(20, "Password must not exceed 20 characters")
    .regex(
      /(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])/,
      "Password must include an uppercase letter, a lowercase letter, a number, and a special character"
    ),
  photo: z.any(),
});

const SignUpForm = () => {
  const { createNewUser, setUser, updateUserProfile } = useUser();
  const axiosPublic = useAxiosPublic();
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data) => {
    const { name, email, password, photo } = data;
    try {
      // Create user
      const result = await createNewUser(email, password);
      const user = result.user;
      setUser(user);

      // Update Profile
      await updateUserProfile({
        displayName: name,
        photoURL: photo?.[0]?.name,
      });

      // Store user info in DB
      const userInfo = { name, email };
      const res = await axiosPublic.post("/users", userInfo);
      if (res.data.insertedId) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "User Created Successfully",
          showConfirmButton: false,
          timer: 1500,
        });
        router.push("/");
      }
    } catch (error) {
      console.error("Error:", error);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: error.message || "Something went wrong!",
      });
    }
  };


  return (
    <div className="hero bg-base-200 min-h-screen mt-20">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left w-96">
          {/* Only renders Lottie animation on the client side */}
          <LottieAnimation animationData={lottieRegister} />
        </div>
        <div className="card bg-base-100 shrink-0 shadow-2xl p-6">
          <div className="card-body">
            <h2 className="text-2xl font-bold text-center text-neutral">
              Welcome to Sign Up
            </h2>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <label className="fieldset-label">Name</label>
              <input {...register("name")} type="text" className="input" placeholder="Name" />
              {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}

              <label className="fieldset-label">Email</label>
              <input {...register("email")} type="email" className="input" placeholder="Email" />
              {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}

              <label className="fieldset-label">Photo</label>
              <input {...register("photo")} type="file" className="file-input file-input-bordered file-input-primary" />
              {errors.photo && <p className="text-red-500">{errors.photo.message}</p>}

              <label className="fieldset-label">Password</label>
              <input {...register("password")} type="password" className="input" placeholder="Password" />
              {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}

              <button type="submit" className="btn w-full bg-[#690031] text-white mt-4">
                Sign Up
              </button>
            </form>
            <button>
              <Link href="/login">
                <p className="text-center text-lg">
                  Already have an account? <span className="text-blue-500 font-bold">Login</span>
                </p>
              </Link>
            </button>
            <div>
              <Social />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpForm;
