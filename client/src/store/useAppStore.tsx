import { create } from "zustand";

interface AppState {
  isShowModal: boolean;
  contentModal: React.ReactNode | null;
  setShowModal: (isShowModal: boolean, contentModal: React.ReactNode) => void;
}

export const useAppStore = create<AppState>((set) => ({
  isShowModal: false,
  contentModal: null,
  setShowModal: (isShowModal, contentModal) => {
    set({ isShowModal, contentModal });
  },
}));
