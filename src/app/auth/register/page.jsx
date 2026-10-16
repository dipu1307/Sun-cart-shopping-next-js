
"use client";

import Link from "next/link";
import { useState } from "react";
import {
  Button,
  Input,
  TextField,
  Label,
  FieldError,
} from "@heroui/react";
import { Eye, EyeOff } from "lucide-react";
import { useForm } from "react-hook-form";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";


const RegisterPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit =async (formData) => {
    console.log("Register data:", formData);
      
    const {data,error}= await authClient.signUp.email({
      name: formData.name,
      email: formData.email,
      password: formData.password,
      image: formData.photoURL,
      callbackURL: "/auth/login",

    });
    
    if(error){
      console.log('Sign Up Error',error);
    }
    else{
      console.log("SignUp Successful", data);
    }
    
    router.push("/auth/login");
  };
  

  return (
    <main className="flex min-h-[70vh] items-center justify-center bg-[#f7f9f8] px-4 py-12">
      <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-lg">
        <div className="mb-8 text-center">
          <h1 className="mb-2 text-3xl font-bold text-[#244D3F]">
            Create Account
          </h1>
          <p className="text-gray-500">Join SunCart for a refreshing summer!</p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          {/* Name */}
          <TextField name="name" isInvalid={!!errors.name}>
            <Label className="mb-2 block text-sm font-medium text-gray-700">
              Full Name
            </Label>

            <Input
              {...register("name", {
                required: "Name is required",
                minLength: {
                  value: 2,
                  message: "Name must be at least 2 characters",
                },
              })}
              placeholder="Enter your full name"
              className="w-full rounded-lg border border-gray-300 px-3 py-2 outline-none focus:border-[#244D3F]"
            />

            <FieldError>{errors.name?.message}</FieldError>
          </TextField>

          {/* Email */}
          <TextField name="email" type="email" isInvalid={!!errors.email}>
            <Label className="mb-2 block text-sm font-medium text-gray-700">
              Email Address
            </Label>

            <Input
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Enter a valid email address",
                },
              })}
              placeholder="Enter your email"
              type="email"
              className="w-full rounded-lg border border-gray-300 px-3 py-2 outline-none focus:border-[#244D3F]"
            />

            <FieldError>{errors.email?.message}</FieldError>
          </TextField>

          {/* Photo URL */}
          <TextField name="photoURL" isInvalid={!!errors.photoURL}>
            <Label className="mb-2 block text-sm font-medium text-gray-700">
              Profile Photo URL
            </Label>

            <Input
              {...register("photoURL", {
                required: "Photo URL is required",
                pattern: {
                  value: /^https?:\/\/.+/i,
                  message:
                    "Enter a valid URL starting with http:// or https://",
                },
              })}
              placeholder="https://example.com/photo.jpg"
              type="url"
              className="w-full rounded-lg border border-gray-300 px-3 py-2 outline-none focus:border-[#244D3F]"
            />

            <FieldError>{errors.photoURL?.message}</FieldError>
          </TextField>

          {/* Password */}
          <TextField
            name="password"
            type={showPassword ? "text" : "password"}
            isInvalid={!!errors.password}
          >
            <Label className="mb-2 block text-sm font-medium text-gray-700">
              Password
            </Label>

            <div className="relative">
              <Input
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters",
                  },
                })}
                placeholder="Create a password"
                type={showPassword ? "text" : "password"}
                className="w-full rounded-lg border border-gray-300 px-3 py-2 pr-12 outline-none focus:border-[#244D3F]"
              />

              <button
                type="button"
                onClick={() => setShowPassword((prev) => !prev)}
                aria-label={showPassword ? "Hide password" : "Show password"}
                className="absolute right-3 top-1/2 z-20 -translate-y-1/2 cursor-pointer text-gray-500"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>

            <FieldError>{errors.password?.message}</FieldError>
          </TextField>

          <Button
            type="submit"
            isDisabled={isSubmitting}
            className="w-full rounded-lg bg-[#244D3F] py-3 font-semibold text-white"
          >
            {isSubmitting ? "Please wait..." : "Create Account"}
          </Button>
        </form>

        <p className="mt-6 text-center text-gray-600">
          Already have an account?{" "}
          <Link
            href="/auth/login"
            className="font-semibold text-[#244D3F] hover:underline"
          >
            Login
          </Link>
        </p>
      </div>
    </main>
  );
};

export default RegisterPage;

