import { ProjectType } from "@/config/projects"
import { BsFillRocketTakeoffFill } from "react-icons/bs"

function ProjectFeatures({ features }: { features: ProjectType["features"] }) {
  return (
    <div className='lg:text-xl text-sm mb-4'>
      <p className='dark:text-gray-400 mb-2'>Features :</p>
      <ul className='flex flex-wrap gap-3 text-gray-400'>
        {features.map((feature) => {
          return (
            <li key={feature.name} className='flex items-center gap-2'>
              <BsFillRocketTakeoffFill className='text-blue-500' />
              {feature.name}
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default ProjectFeatures
