import { SkillType } from "@/config/skills"
import Image from "next/image"

type SkillCardProps = {
  skill: SkillType
}

export default function SkillCard({ skill }: SkillCardProps) {
  return (
    <div className='max-w-[500px] mx-auto rounded-md px-4 py-3 border-2 border-purple shadow-lg dark:shadow-cardNeon dark:bg-cardBackground'>
      <h3 className='dark:text-gray-300 text-3xl font-semibold mb-4 text-center'>
        {skill.category}
      </h3>
      <div className='flex flex-wrap gap-4 justify-center'>
        {skill.content.map(({ name, image }) => {
          return (
            <div
              key={name}
              className='flex items-center gap-1 py-2 px-3 border border-gray-300 rounded-lg '
            >
              <Image
                className='w-6 h-6'
                src={image}
                alt={name}
                width={24}
                height={24}
              />

              <span className='text-sm font-medium dark:text-gray-400'>
                {name}
              </span>
            </div>
          )
        })}
      </div>
    </div>
  )
}
