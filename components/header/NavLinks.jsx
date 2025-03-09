export default function NavLinks({ navLinks }) {
  return (
    <>
      <nav className='nav hidden md:flex justify-self-end pr-12'>
        <ul className='nav-links'>
          {navLinks.map(({ to, id, text }) => {
            return (
              <li key={id} className='nav-link'>
                <a href={to}>{text}</a>
              </li>
            )
          })}
        </ul>
      </nav>
    </>
  )
}
