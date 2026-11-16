import { useEffect, useRef, useState } from 'react'

function getInitialTheme() {
  const savedTheme = localStorage.getItem('theme')
  if (savedTheme) {
    return savedTheme === 'dark'
  }
  return window.matchMedia('(prefers-color-scheme: dark)').matches
}

function ThemeToggle() {
  const [darkMode, setDarkMode] = useState(getInitialTheme)
  const isFirstRender = useRef(true)

  useEffect(() => {
    const root = document.documentElement

    if (darkMode) {
      root.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      root.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }

    // Jangan mainkan animasi wipe saat pertama kali halaman dimuat
    if (isFirstRender.current) {
      isFirstRender.current = false
      return
    }

    root.classList.add('theme-transitioning')
    const timeoutId = setTimeout(() => {
      root.classList.remove('theme-transitioning')
    }, 500)

    return () => clearTimeout(timeoutId)
  }, [darkMode])

  // Ikuti perubahan preferensi sistem HANYA jika user belum pernah
  // memilih tema secara manual
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')

    const handleChange = (event) => {
      const hasManualPreference = localStorage.getItem('theme')
      if (!hasManualPreference) {
        setDarkMode(event.matches)
      }
    }

    mediaQuery.addEventListener('change', handleChange)
    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [])

  return (
    <div className="theme-toggle-wrapper">
      <input
        className="peer sr-only"
        id="theme"
        type="checkbox"
        checked={darkMode}
        onChange={(event) => {
          setDarkMode(event.target.checked)
        }}
        aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
      />

      <label htmlFor="theme" className="theme-toggle">
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" />
          <path d="M3 12h1m8 -9v1m8 8h1m-9 8v1m-6.4 -15.4l.7 .7m12.1 -.7l-.7 .7m0 11.4l.7 .7m-12.1 -.7l-.7 .7" />
        </svg>

        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z" />
        </svg>
      </label>

      <div className="theme-mask">
        {Array.from({ length: 25 }, (_, i) => {
          const distanceFromCenter = Math.abs(i - 12)
          return <div key={i} style={{ '--i': distanceFromCenter }} />
        })}
      </div>
    </div>
  )
}

export default ThemeToggle