"use client"
import { useState } from "react"
import SectionTitle from "@/components/SectionTitle"
import { sectionHeading } from "@/config/section"
import { projects, ProjectType } from "@/config/projects"
import ProjectCard from "@/components/projects/ProjectCard"
import ProjectViewModal from "@/components/projects/ProjectViewModal"

function Projects() {
  const [showModal, setShowModal] = useState(false)
  const [project, setProject] = useState<null | ProjectType>(null)

  const handleOpenModal = (selectedProject: ProjectType) => {
    setProject(selectedProject)
    setShowModal(true)
  }
  const closeModal = () => {
    setShowModal(false)
  }

  return (
    <>
      <section id='projects' className='py-16'>
        <div className='container'>
          <SectionTitle heading={sectionHeading.projects} />
          <div className='projects my-12'>
            {projects.map((project) => {
              return (
                <ProjectCard
                  key={project.id}
                  project={project}
                  openModal={handleOpenModal}
                  closeModal={closeModal}
                />
              )
            })}
          </div>
        </div>
      </section>
      {showModal && (
        <ProjectViewModal project={project} closeModal={closeModal} />
      )}
    </>
  )
}

export default Projects
