import { writable } from 'svelte/store'

export type Theme = 'light' | 'dark' | 'system'
const STORAGE_KEY = 'theme'

function getInitial(): Theme {
  const saved = localStorage.getItem(STORAGE_KEY) as Theme | null
  if (saved === 'light' || saved === 'dark') return saved
  if (saved === 'system') return 'system'
  return 'system'
}

function apply(theme: Theme) {
  const root = document.documentElement
  if (theme === 'system') {
    root.setAttribute(
      'data-theme',
      window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
    )
  } else {
    root.setAttribute('data-theme', theme)
  }
}

function createThemeStore() {
  const { subscribe, set, update } = writable<Theme>(getInitial())

  subscribe((theme) => {
    localStorage.setItem(STORAGE_KEY, theme)
    apply(theme)
  })

  return {
    subscribe,
    set,
    toggle: () => update((t) => (t === 'light' ? 'dark' : t === 'dark' ? 'system' : 'light')),
    useSystem: () => set('system')
  }
}

export const theme = createThemeStore()
