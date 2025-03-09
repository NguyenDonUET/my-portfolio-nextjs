import { sectionHeading } from "@/config/section"
import { skills } from "@/config/skills"
import SectionTitle from "@/components/SectionTitle"
import SkillCard from "@/components/skills/SkillCard"

export default function Skills() {
  return (
    <section id='skills' className='py-16'>
      <div className='container'>
        <SectionTitle heading={sectionHeading.skills} />
        <div className='skills inner-container'>
          {skills.map((skill) => {
            return <SkillCard skill={skill} key={skill.category} />
          })}
        </div>
      </div>
    </section>
  )
}
