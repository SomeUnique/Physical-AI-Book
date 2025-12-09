import { create } from 'zustand';

export const useProgress = create((set) => ({
  completedChapters: [],
  totalChapters: 35,
  markComplete: (chapterId) => set((state) => {
    if (!state.completedChapters.includes(chapterId)) {
      return {
        completedChapters: [...state.completedChapters, chapterId]
      };
    }
    return state;
  }),
}));