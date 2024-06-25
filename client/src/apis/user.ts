import { CurrentUserResponse } from "@/types";
import axiosClient from "@/utils/axios";

export const getCurrentUser = (): Promise<CurrentUserResponse> =>
  axiosClient({
    url: "/user/current",
    method: "GET",
  });
