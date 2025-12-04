import { create } from 'zustand'
import { persist } from 'zustand/middleware'

type ThemeOption = 'light' | 'dark' | 'system'

interface ThemeState {
  theme: ThemeOption
  setTheme: (t: ThemeOption) => void
  toggle: () => void
}

export function applyHtmlDarkClass(resolved: 'light' | 'dark') {
  if (typeof window === 'undefined') return
  document.documentElement.classList.toggle('dark', resolved === 'dark')
}

export function resolveTheme(theme: ThemeOption): 'light' | 'dark' {
  if (theme === 'system') {
    if (typeof window !== 'undefined') {
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
    }
    return 'light'
  }
  return theme
}

export const useThemeStore = create<ThemeState>()(
  persist(
    (set, get) => ({
      theme: 'system',

      setTheme: (t: ThemeOption) => {
        set({ theme: t })
        applyHtmlDarkClass(resolveTheme(t))
      },

      toggle: () => {
        const curr = get().theme
        let next: ThemeOption = 'light'

        if (curr === 'light') next = 'dark'
        else if (curr === 'dark') next = 'light'
        else {
          const sys = resolveTheme('system')
          next = sys === 'dark' ? 'light' : 'dark'
        }

        set({ theme: next })
        applyHtmlDarkClass(resolveTheme(next))
      }
    }),
    {
      name: 'theme-storage',
      storage: {
        getItem: name => {
          if (typeof window === 'undefined') return null
          const raw = localStorage.getItem(name)
          return raw ? JSON.parse(raw) : null
        },

        setItem: (name, value) => {
          if (typeof window === 'undefined') return
          localStorage.setItem(name, JSON.stringify(value))
        },

        removeItem: name => {
          if (typeof window === 'undefined') return
          localStorage.removeItem(name)
        }
      }
    }
  )
)
