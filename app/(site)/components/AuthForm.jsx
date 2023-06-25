"use client";

import { useCallback, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

import Input from "@/app/components/inputs/Input";

const AuthForm = () => {
  const [variant, setVariant] = useState("LOGIN");
  const [isLoading, setIsLoading] = useState(false);

  const toggleVariant = useCallback(() => {
    if (variant === "LOGIN") {
      setVariant("REGISTER");
    } else {
      setVariant("LOGIN");
    }
  }, [variant]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const onSubmit = (data) => {
    setIsLoading(true);
    if (variant === "REGISTER") {
      // register
    }

    if (variant === "LOGIN") {
      // NEXTauth
    }
  };

  const socialAction = (action) => {
    setIsLoading(true);
    // social signin
  };

  return (
    <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
      <div className="bg-white px-4 py-8 shadow sm:rounded-lg sm:px-10">
        <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
          <Input
            id={"email"}
            label={"Email"}
            register={register}
            errors={errors}
          />
        </form>
      </div>
    </div>
  );
};

export default AuthForm;

// 39:16
