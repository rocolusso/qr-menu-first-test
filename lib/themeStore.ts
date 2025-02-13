import { create } from 'zustand';
import {persist} from "zustand/middleware";



type ThemeStore = {
    theme:string,
    toggleTheme: () => void
}

export const useThemeStore = create(
    persist<ThemeStore>(
        (set) => ({
            theme:'light',
            toggleTheme: () =>
                  set((state) => ({
                          theme: state.theme === 'light' ? 'dark' : 'light',
                  })),
        }),
        {
            name: "theme-storage",
        },
    ),
)

