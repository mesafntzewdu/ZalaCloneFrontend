import { create } from 'zustand';

const useRegister = create((set) => ({
  open: false,
  setOpen: () => set({ open: true }),
  setClose: () => set({ open: false }),
}));
export default useRegister