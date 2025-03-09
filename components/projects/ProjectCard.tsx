import ProjectFeatures from "@/components/projects/ProjectFeatures"
import { ProjectType } from "@/config/projects"
import { AiOutlineClose } from "react-icons/ai"
import ProjectCardLinks from "./ProjectCardLinks"

type ProjectCardProps = {
  project: ProjectType
  openModal?: (project: ProjectType) => void
  isInModal?: boolean
  closeModal?: () => void
}

function ProjectCard({
  project,
  openModal = () => {},
  isInModal = false,
  closeModal = () => {},
}: ProjectCardProps) {
  return (
    <>
      <div
        className={`max-w-3xl rounded-lg dark:bg-cardBackground shadow-lg pb-6 px-6 pt-4 relative flex flex-col gap-y-3 border dark:border-none transition ease-in-out bg-white overflow-hidden ${
          !isInModal &&
          "hover:-translate-y-2 cursor-pointer dark:shadow-cardNeon"
        }
                `}
        onClick={() => openModal(project)}
      >
        {/* <div className='relative w-[320px] h-[320px]:'>
          <Image
            className='rounded-lg max-h-[320px] object-fit'
            src={project.image}
            alt={project.title}
            fill
          />
        </div> */}

        <div className='flex flex-wrap items-center gap-1'>
          {project.tags.map((tag) => {
            return (
              <span
                key={tag}
                className='text-xs text-purple bg-tagBackground px-2 py-1 rounded-xl'
              >
                {tag}
              </span>
            )
          })}
        </div>
        <div className={`flex flex-col gap-2`}>
          <h5
            className={`${
              isInModal &&
              "text-center text-xl md:text-3xl lg:text-4xl font-semibold md:mb-0 mb-2"
            } text-2xl dark:text-gray-300 text-darkBlue capitalize`}
          >
            {project.title}
          </h5>
          <span className='text-sm text-gray-400'>{project.date}</span>
          <p
            className={`${
              isInModal && "text-lg lg:text-xl my-0"
            } text-sm dark:text-gray-400 my-2 `}
          >
            {project.description}
          </p>
          {isInModal && (
            <>
              <ProjectFeatures features={project.features} />
              <ProjectCardLinks
                github={project.github}
                liveApp={project.liveApp}
              />
            </>
          )}
        </div>
        {isInModal && (
          <span
            onClick={() => closeModal()}
            className='w-8 h-8 absolute p-1 top-0 right-0 hover:bg-slate-800 bg-black rounded-full cursor-pointer'
          >
            <AiOutlineClose className='w-full h-full' color='#fff' />
          </span>
        )}
      </div>
    </>
  )
}

export default ProjectCard
