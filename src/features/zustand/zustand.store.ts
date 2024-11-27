import { create } from 'zustand';

export type UserStore = {
  name: string;
  age: number;
  changeName: (name: string) => void;
  changeAge: (age: number) => void;
};

export const useUserStore = create<UserStore>((set) => ({
  name: 'John',
  age: 18,
  changeName: (name: string) => set({ name }),
  changeAge: (age: number) => set({ age }),
}));
