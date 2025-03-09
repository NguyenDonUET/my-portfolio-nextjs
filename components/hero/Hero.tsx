import DownloadResumeBtn from "@/components/DownloadResumeBtn"
import { heroData } from "@/config/hero"
import { socialLinks } from "@/config/socialLinks"
import Image from "next/image"
import Link from "next/link"

export default function Hero() {
  return (
    <section
      id='about'
      className='py-14 px-8 md:py-16  min-h-screen dark:bg-backgroundDarkMode '
    >
      <div className='md:mx-auto max-w-6xl mt-9 flex flex-col-reverse md:gap-4 md:flex-row md:justify-between md:items-center gap-y-12'>
        <div className='md:basis-2/3 text-center md:text-left'>
          <h1 className='md:flex-row flex flex-col items-center gap-2'>
            <span className='text-5xl md:text-4xl lg:text-5xl tracking-tight font-bold'>
              {heroData.title}
            </span>

            <Image
              className='w-10 h-10 block md:inline-block md:ml-2'
              src='/images/waving-hand.png'
              alt='waving-hand'
              width={40}
              height={40}
            />
          </h1>
          <p className='mt-4 text-xl dark:text-gray-400 light:text-gray-700 md:max-w-xl'>
            {heroData.description}
          </p>
          <div className='flex items-center flex-col md:flex-row text-xl mt-8 gap-4'>
            <DownloadResumeBtn />
            <Link
              className='flex items-center gap-1'
              href={socialLinks[0].link}
              target='_blank'
            >
              {/* {socialLinks[0].name} */}
              {socialLinks[0].icon}
            </Link>
          </div>
        </div>
        <div className='md:basis-1/3'>
          <Image
            src='/images/my-avatar.jpg'
            alt='avatar'
            className='avatar'
            width={300}
            height={300}
          />
        </div>
      </div>
    </section>
  )
}
