import { getCurrentUser } from "@/apis/user";
import { User } from "@/types";
import { create } from "zustand";
import { persist } from "zustand/middleware";
export interface UserState {
  token: string | null;
  currentUser: User | null;
  setToken: (token: string | null) => void;
  getUserCurrent: () => void;
}

export const useUserStore = create<UserState>()(
  persist(
    (set) => ({
      token: null,
      currentUser: null,
      setToken: (token) => {
        set({ token });
      },
      getUserCurrent: async () => {
        const response = await getCurrentUser();
        if (response) return set(() => ({ currentUser: response.user }));
      },
    }),
    {
      name: "zillow",
    }
  )
);
