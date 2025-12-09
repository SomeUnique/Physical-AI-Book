import { create } from 'zustand';

export const useUserLevel = create((set) => ({
  level: 'beginner',
  setLevel: (level) => set({ level }),
}));