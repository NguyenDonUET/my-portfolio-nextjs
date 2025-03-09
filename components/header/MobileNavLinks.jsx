export default function MobileNavLinks({ navLinks }) {
  return (
    <nav className='col-span-2 mt-6 block md:hidden bg-transparent'>
      <ul className='flex flex-col items-center gap-2 text-center'>
        {navLinks.map(({ id, to, text }) => {
          return (
            <li key={id} className='nav-link nav-link--mobile'>
              <a href={to}>{text}</a>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
