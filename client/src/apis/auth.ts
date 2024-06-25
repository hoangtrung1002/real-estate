import { RegisterResponse, SignInResponse } from "@/types";
import axiosClient from "@/utils/axios";
import { signInSchema, signUpSchema } from "@/utils/validation/auth";
import { z } from "zod";

export const register = (
  data: z.infer<typeof signUpSchema>
): Promise<RegisterResponse> =>
  axiosClient({
    url: "/auth/register",
    method: "POST",
    data: data,
  });

export const signIn = (
  data: z.infer<typeof signInSchema>
): Promise<SignInResponse> =>
  axiosClient({
    url: "/auth/signin",
    method: "POST",
    data: data,
  });
