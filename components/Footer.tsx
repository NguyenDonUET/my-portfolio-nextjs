export default function Footer() {
  const currentYear = new Date().getFullYear()
  return (
    <footer className='w-full bg-black text-gray-400 p-3'>
      <p className='text-base md:text-xl text-center'>
        Copyright &copy; {currentYear} Don Nguyen. All rights reserved.
      </p>
    </footer>
  )
}
