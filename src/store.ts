import create from 'zustand';

interface User {
  id: number;
  username: string;
}

interface Store {
  user: User | null;
  isLoggedIn: boolean;
  login: (user: User) => void;
  register: (user: User) => void;
  logout: () => void;
}

const useStore = create<Store>()((set) => ({
  user: null,
  isLoggedIn: false,
  login: (user: User) => set({ user, isLoggedIn: true }),
  register: (user: User) => set({ user, isLoggedIn: true }),
  logout: () => set({ user: null, isLoggedIn: false })
}));

export { useStore };