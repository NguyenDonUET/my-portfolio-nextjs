import Image from "next/image"

export default function ProjectCardLinks({
  github,
  liveApp,
}: {
  github: string | undefined
  liveApp: string | undefined
}) {
  return (
    <div className='mt-4 flex gap-2 '>
      <a
        href={github}
        rel='noreferrer'
        target='_blank'
        className={`btn capitalize bg-btnBackground  transition-all ease-in-out duration-300 flex items-center justify-center gap-1 ${
          github
            ? "hover:bg-gray-700"
            : "opacity-50 cursor-not-allowed hover:bg-auto"
        }`}
      >
        <Image
          src='/icons/github.svg'
          alt='github'
          className='w-6 h-6 md:w-8 md:h-8'
          width={24}
          height={24}
        />
        {github ? "Github" : "Not Available"}
      </a>
      <a
        href={liveApp}
        target='_blank'
        rel='noreferrer'
        className={`btn capitalize bg-purple  transition-all ease-in-out duration-300 flex items-center justify-center gap-1 ${
          liveApp
            ? "hover:bg-purple/45"
            : "opacity-50 cursor-not-allowed hover:bg-auto"
        }`}
      >
        <Image
          className='w-6 h-6 md:w-8 md:h-8'
          src='/icons/live-demo.svg'
          alt='live demo'
          width={24}
          height={24}
        />
        {liveApp ? "Live demo" : "Not Available"}
      </a>
    </div>
  )
}
