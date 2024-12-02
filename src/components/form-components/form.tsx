"use client";
import React, { useRef } from "react";
import { useForm } from "react-hook-form";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAppDispatch, useAppSelector } from "@/state/hooks";
import { IState } from "@/state/state";
import InputField from "./text-input";

const loginFormFieldNames = {
  password: "password",
  email: "email",
};

export default function ExampleAuthForm() {
  const dispatch = useAppDispatch();
  const router = useRouter();

  const { handleSubmit, setValue, getValues, control, reset } = useForm<any>({
    defaultValues: {
      email: undefined,
      password: undefined,
    },
  });

  const onSubmit = async (values: any) => {
    // try {
    //   const phoneNumber = values.phoneNumber.split(" ")[1];
    //   // const password = await bcrypt.hash(values.password, 5);
    //   const password = values.password;
    //   const res: any = await dispatch(loginUser({ phoneNumber, password }));
    //   console.log(res);
    //   if (!res.payload.uuid) {
    //     window.alert("The password entered is incorrect.");
    //     return;
    //   }
    //   reset();
    //   router.push(HOME);
    // } catch (e) {
    //   console.log(e);
    // }
  };
  return (
    <div className="min-h-screen bg-white text-black w-full px-[12.5%] flex flex-row justify-center items-center">
      <div className="w-[30%] border border-black border-2 p-8 rounded">
        <p className="text-center mb-4 text-xl font-bold">LOGIN FORM</p>
        <form onSubmit={handleSubmit(onSubmit)}>
          <InputField
            name={loginFormFieldNames.email}
            control={control}
            rules={{}}
            type="email"
            className="bg-white p-2 border border-lightGray border-1 w-full rounded my-4"
            disabled={false}
            placeholder="Password"
          />
          <InputField
            name={loginFormFieldNames.password}
            control={control}
            rules={{}}
            type="password"
            className="bg-white p-2 border border-lightGray border-1 w-full rounded my-4"
            disabled={false}
            placeholder="Password"
          />
          <button
            type="submit"
            className="bg-blue text-white block rounded w-full p-2 my-2"
          >
            Login
          </button>
          <Link href={""}>Forgot password?</Link>
        </form>
      </div>
    </div>
  );
}
