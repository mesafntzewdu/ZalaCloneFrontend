import { create } from 'zustand';

const useLogin = create((set) => ({
  open: false,
  setOpen: () => set({ open: true }),
  setClose: () => set({ open: false }),
}));
export default useLogin;
