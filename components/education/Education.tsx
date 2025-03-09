import { sectionHeading } from "@/config/section"
import { FaGraduationCap } from "react-icons/fa"
import { education } from "@/config/education"
import SectionTitle from "@/components/SectionTitle"

export default function Education() {
  return (
    <section id='education' className='education py-16'>
      <div className='container'>
        <SectionTitle heading={sectionHeading.education} />
        <div className='flex flex-col mt-8 px-4 gap-4'>
          {education.map(({ id, des, endDate, startDate, school }) => {
            return (
              <div
                key={id}
                className='grid grid-cols-[24px_1fr_100px] max-w-2xl mx-auto
                    border py-2 px-3 gap-4 rounded-md border-lightBlue dark:bg-cardBackground
                    dark:shadow-cardNeon
                    '
              >
                <FaGraduationCap />
                <div className=' md:text-lg dark:text-gray-300 row-start-2 md:row-start-1 col-span-3 md:col-start-2 md:col-span-1 text-center'>
                  <p className='text-sm'>{des}</p>
                  <p className='text-sm'>{school}</p>
                </div>
                <time
                  className='text-[12px] text-gray-400 block col-start-3 row-start-1 text-right self-center md:self-auto'
                  dateTime={startDate}
                >
                  {startDate} - {endDate}
                </time>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
