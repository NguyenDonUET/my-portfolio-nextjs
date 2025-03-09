"use client"
import { useState } from "react"
import { FaBars } from "react-icons/fa"
import { AiOutlineClose } from "react-icons/ai"
import { navLinks } from "@/config/links"
import NavLinks from "@/components/header/NavLinks"
import MobileNavLinks from "@/components/header/MobileNavLinks"

function Header() {
  const [showMobileNav, setShowMobileNav] = useState(false)

  return (
    <header className='grid grid-cols-2 py-6 px-10 lg:px-24 bg-white dark:bg-backgroundDarkMode shadow-md fixed top-0 left-0 w-full z-50'>
      <div className='font-bold text-dark self-start lg:pl-8'>
        <a href=''>DonNguyen.dev</a>
      </div>
      <NavLinks navLinks={navLinks} />
      <button
        className='block md:hidden mt-1 justify-self-end self-start'
        onClick={() => setShowMobileNav(!showMobileNav)}
      >
        {showMobileNav ? <AiOutlineClose /> : <FaBars />}
      </button>

      {showMobileNav && <MobileNavLinks navLinks={navLinks} />}
    </header>
  )
}

export default Header
