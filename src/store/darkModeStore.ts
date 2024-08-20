import { create } from 'zustand'

interface DarkMode {
  isDarkMode: boolean
}

interface DarkModeState extends DarkMode {
  setDarkMode: (isDarkMode: boolean) => void
  initializeDarkMode: () => void
}

export const useDarkModeStore = create<DarkModeState>((set) => ({
  isDarkMode: false,
  setDarkMode: (isDarkMode) => {
    window.localStorage.setItem('darkMode', JSON.stringify(isDarkMode))
    set({ isDarkMode })

    if (isDarkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  },
  initializeDarkMode: () => {
    const darkMode = JSON.parse(
      window.localStorage.getItem('darkMode') || 'false',
    )
    set({ isDarkMode: darkMode })

    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  },
}))
