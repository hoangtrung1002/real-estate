import { create } from "zustand";

interface UserState {
  token: string | null;
  current: string | null;
}

export const useUserStore = create<UserState>(() => ({
  token: null,
  current: null,
}));
