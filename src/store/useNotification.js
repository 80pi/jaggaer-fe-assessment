import { create } from "zustand";

const useNotification = create((set, get) => ({
  notificaiton: 0,
  setNotification: (payload) => {
    let count = get().notificaiton + payload;
    set({
      notificaiton: count,
    });
  },
  resetNotification: () => set({ notificaiton: 0 }),
}));

export default useNotification;
