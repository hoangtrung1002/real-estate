import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import useAuthForm from "@/hooks/useAuthForm";
import { cn } from "@/utils/helper";
import { Loader2 } from "lucide-react";
import { useEffect } from "react";
import Button from "../ui/button";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { PageState } from "@/types";

export interface FormValues {
  phone: string;
  name?: string;
  password: string;
}

const Login = () => {
  const { form, onSubmit, type, setType } = useAuthForm();

  useEffect(() => {
    form.reset();
  }, [type, form]);

  return (
    <div
      onClick={(e) => e.stopPropagation()}
      className="w-[500px] text-lg items-center flex flex-col gap-6 px-12 py-8 bg-white rounded-md "
    >
      <h1 className="text-3xl font-semibold tracking-tight">
        Welcome to Zillow
      </h1>
      <div
        className={cn("flex justify-start w-full gap-6 border-b", {
          "opacity-20 ": form.formState.isSubmitting,
        })}
      >
        <span
          onClick={() => setType(PageState.SIGNIN)}
          className={cn("cursor-pointer", {
            "border-b-4 border-primary-700": type === PageState.SIGNIN,
            "cursor-not-allowed ": form.formState.isSubmitting,
          })}
        >
          Sign in
        </span>
        <span
          onClick={() => setType(PageState.SIGNUP)}
          className={cn("cursor-pointer", {
            "border-b-4 border-primary-700": type === PageState.SIGNUP,
            "cursor-not-allowed ": form.formState.isSubmitting,
          })}
        >
          New account
        </span>
      </div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col w-full space-y-4"
        >
          {type === PageState.SIGNUP && (
            <FormField
              control={form.control}
              name="name"
              render={({ field, formState }) => (
                <FormItem>
                  <FormLabel className="text-base font-semibold">
                    Full Name
                  </FormLabel>
                  <FormControl>
                    <Input
                      disabled={formState.isSubmitting}
                      placeholder="Enter your full name"
                      {...field}
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
          )}
          <FormField
            control={form.control}
            name="phone"
            render={({ field, formState }) => (
              <FormItem>
                <FormLabel className="text-base font-semibold">
                  Phone Number
                </FormLabel>
                <FormControl>
                  <Input
                    disabled={formState.isSubmitting}
                    placeholder="+84 0123456"
                    {...field}
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field, formState }) => (
              <FormItem>
                <FormLabel className="text-base font-semibold">
                  Password
                </FormLabel>
                <FormControl>
                  <Input
                    type="password"
                    placeholder="Enter your password"
                    disabled={formState.isSubmitting}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {type === PageState.SIGNUP && (
            <FormField
              control={form.control}
              name="role"
              render={({ field, formState }) => (
                <FormItem className="space-y-3">
                  <FormLabel className="text-base font-semibold">
                    Type Account
                  </FormLabel>
                  <FormControl>
                    <RadioGroup
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      disabled={formState.isSubmitting}
                      className="flex space-x-6"
                    >
                      <FormItem className="flex items-center space-x-2 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="USER" />
                        </FormControl>
                        <FormLabel className="font-normal">User</FormLabel>
                      </FormItem>
                      <FormItem className="flex items-center space-x-2 space-y-0 ">
                        <FormControl>
                          <RadioGroupItem value="AGENT" />
                        </FormControl>
                        <FormLabel className="font-normal">Agent</FormLabel>
                      </FormItem>
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          )}

          {form.formState.isSubmitting ? (
            <Button disabled={form.formState.isSubmitting} type="submit">
              <Loader2 className="animate-spin" />
            </Button>
          ) : (
            <Button type="submit">Submit</Button>
          )}
        </form>
      </Form>
    </div>
  );
};

export default Login;
