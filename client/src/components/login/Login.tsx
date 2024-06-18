import { cn } from "@/utils/helper";
import { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import Button from "../ui/button";
import { InputController } from "../ui/input";

enum PageState {
  SIGNIN,
  SIGNUP,
}

export interface FormValues {
  phone: string;
  name?: string;
  password: string;
}

const Login = () => {
  const [type, setType] = useState<PageState>(PageState.SIGNIN);
  const { control, handleSubmit, reset } = useForm<FormValues>({
    defaultValues: { phone: "", name: "", password: "" },
  });

  useEffect(() => {
    reset();
  }, [type]);

  const onSubmit: SubmitHandler<FormValues> = (data) => console.log(data);

  return (
    <div
      onClick={(e) => e.stopPropagation()}
      className="w-[500px] text-lg items-center flex flex-col gap-6 px-12 py-8 bg-white rounded-md "
    >
      <h1 className="text-3xl font-semibold tracking-tight">
        Welcome to Zillow
      </h1>
      <div className="flex justify-start w-full gap-6 border-b ">
        <span
          onClick={() => setType(PageState.SIGNIN)}
          className={cn("cursor-pointer", {
            "border-b-4 border-primary-700": type === PageState.SIGNIN,
          })}
        >
          Sign in
        </span>
        <span
          onClick={() => setType(PageState.SIGNUP)}
          className={cn("cursor-pointer", {
            "border-b-4 border-primary-700": type === PageState.SIGNUP,
          })}
        >
          New account
        </span>
      </div>
      <form
        className="flex flex-col w-full gap-4"
        onSubmit={handleSubmit(onSubmit)}
      >
        {type === PageState.SIGNUP && (
          <InputController
            control={control}
            rules={{ required: "This is empty" }}
            name="name"
            props={{ customstyle: "rounded-md" }}
          />
        )}

        <InputController
          control={control}
          name="phone"
          rules={{ required: "This is empty" }}
          props={{ customstyle: "rounded-md", placeholder: "+84-123-456" }}
        />
        <InputController
          control={control}
          name="password"
          rules={{ required: "This is empty" }}
          props={{
            customstyle: "rounded-md",
            placeholder: "Enter your password",
            type: "password",
          }}
        />

        <Button className="py-2 mt-6" type="submit">
          {type === PageState.SIGNIN ? "Sign In" : "Create a new account"}
        </Button>
        <span className="mx-auto text-center cursor-pointer text-primary-500 hover:underline">
          Forgot password?
        </span>
      </form>
    </div>
  );
};

export default Login;
