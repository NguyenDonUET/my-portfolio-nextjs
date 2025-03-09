"use client"
import { useEffect, useState } from "react"
import { MdDarkMode, MdLightMode } from "react-icons/md"

export default function ToggleTheme() {
  const [isDarkTheme, setIsDarkTheme] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("theme") === "dark"
    }
    return false
  })
  useEffect(() => {
    if (isDarkTheme) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
    localStorage.setItem("theme", isDarkTheme ? "dark" : "light")
  }, [isDarkTheme])

  const handleToggleTheme = () => {
    setIsDarkTheme(!isDarkTheme)
  }

  return (
    <div className='p-2 border border-primaryDarkMode rounded-full shadow-xl shadow-neuonColor fixed top-[14%] z-50 right-[4%] flex items-center justify-center '>
      <button onClick={() => handleToggleTheme()}>
        {isDarkTheme ? <MdLightMode /> : <MdDarkMode />}
      </button>
    </div>
  )
}
