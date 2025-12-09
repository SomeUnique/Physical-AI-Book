import { create } from 'zustand';

export const useUrduMode = create((set) => ({
  isUrdu: false,
  toggle: () => set((state) => ({ isUrdu: !state.isUrdu })),
}));