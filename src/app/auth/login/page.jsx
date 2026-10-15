"use client";

import Link from "next/link";
import { useState } from "react";
import { Button, Input, TextField, Label, FieldError } from "@heroui/react";
import { Eye, EyeOff } from "lucide-react";
import { useForm } from "react-hook-form";

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Login data:", data);
  };

  return (
    <main className="flex min-h-[70vh] items-center justify-center bg-[#f7f9f8] px-4 py-12">
      <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-lg">
        <div className="mb-8 text-center">
          <h1 className="mb-2 text-3xl font-bold text-[#244D3F]">
            Welcome Back!
          </h1>
          <p className="text-gray-500">Login to your SunCart account</p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          <div>
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
                className="w-full rounded-lg border border-gray-300 px-3 py-2 outline-none focus:border-[#244D3F]"
              />

              <FieldError>{errors.email?.message}</FieldError>
            </TextField>
          </div>

          <div>
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
                  placeholder="Enter your password"
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
          </div>

          <Button
            type="submit"
            isLoading={isSubmitting}
            className="w-full bg-[#244D3F] font-semibold text-white"
            radius="lg"
            size="lg"
          >
            Login
          </Button>
        </form>

        <p className="mt-6 text-center text-gray-600">
          Don&apos;t have an account?{" "}
          <Link
            href="/auth/register"
            className="font-semibold text-[#244D3F] hover:underline"
          >
            Register
          </Link>
        </p>
      </div>
    </main>
  );
};

export default LoginPage;
