export default function SectionTitle({ heading = { text: "", des: "" } }) {
  return (
    <div className='my-5 dark:text-white px-2 md:px-0'>
      <h2 className='md:text-7xl text-5xl font-titleFont text-center mb-4'>
        {heading.text}
      </h2>
      <p className='dark:text-gray-300 max-w-[600px] mx-auto text-lg text-center'>
        {heading.des}
      </p>
    </div>
  )
}
