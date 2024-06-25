import { register, signIn } from "@/apis/auth";
import { useToast } from "@/components/ui/use-toast";
import { useAppStore } from "@/store/useAppStore";
import { useUserStore } from "@/store/useUserStore";
import { PageState } from "@/types";
import { signInSchema, signUpSchema } from "@/utils/validation/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const getSchema = (type: PageState) =>
  type === PageState.SIGNUP ? signUpSchema : signInSchema;

const useAuthForm = () => {
  const [type, setType] = useState<PageState>(PageState.SIGNIN);
  const { toast } = useToast();
  const setModal = useAppStore((state) => state.setShowModal);
  const setToken = useUserStore((state) => state.setToken);

  const form = useForm<z.infer<typeof signUpSchema>>({
    resolver: zodResolver(getSchema(type)),
    defaultValues: {
      name: "",
      phone: "",
      password: "",
      role: "USER",
    },
  });

  const onSubmit = async (values: z.infer<typeof signUpSchema>) => {
    if (type === PageState.SIGNUP) {
      const response = await register(values);
      if (response.success) {
        toast({
          variant: "success",
          title: "Congratulations!",
          description: response.mess,
        });
        setType(PageState.SIGNIN);
      } else {
        toast({
          variant: "destructive",
          title: "Uh oh! Something went wrong.",
          description: response.mess,
        });
      }
    } else {
      // Login
      const response = await signIn(values);
      if (response.success) {
        toast({
          variant: "success",
          title: "Welcome! ",
        });
        setToken(response.accessToken);
        setModal(false, null);
      } else {
        toast({
          variant: "destructive",
          title: "Uh oh! Something went wrong.",
          description: response.mess,
        });
      }
    }
  };
  return { form, onSubmit, type, setType };
};

export default useAuthForm;
