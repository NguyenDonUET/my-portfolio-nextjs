import { useCallback, useEffect, useRef } from "react"
import { ProjectType } from "@/config/projects.js"
import ProjectCard from "@/components/projects/ProjectCard"

type ProjectViewModalProps = {
  project: ProjectType | null
  closeModal: () => void
}

function ProjectViewModal({ project, closeModal }: ProjectViewModalProps) {
  const contentRef = useRef(null)

  const handleClickOutside = useCallback(
    (e: MouseEvent) => {
      if ((e.target as HTMLElement).classList.contains("overlay")) {
        closeModal()
      }
    },
    [closeModal]
  )

  const handleClickEsc = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeModal()
      }
    },
    [closeModal]
  )

  useEffect(() => {
    if (!contentRef.current) return
    document.addEventListener("click", handleClickOutside)
    document.addEventListener("keydown", handleClickEsc)
    return () => {
      document.removeEventListener("click", handleClickOutside)
      document.removeEventListener("keydown", handleClickEsc)
    }
  }, [handleClickEsc, handleClickOutside])

  return (
    <>
      <div className='overlay bg-overlayBackground '>
        <div
          className='max-w-3xl modal mt-2 mb-0 md:mb-2  md:mt-0 lg:mt-12 mx-4 lg:mx-0'
          ref={contentRef}
        >
          <ProjectCard
            project={project!}
            isInModal={true}
            closeModal={closeModal}
          />
        </div>
      </div>
    </>
  )
}

export default ProjectViewModal
