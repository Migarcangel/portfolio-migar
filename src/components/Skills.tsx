import './Skills.css'
import SkillCard from "./SkillCard"

function Skills() {
    return (
        <section id="skills" className="skills">
            <h2>Tecnologías</h2>
            <div className="skillcards">
            <SkillCard
                title="Lenguajes"
                skills={['Java', 'JavaScript', 'TypeScript', 'SQL', 'HTML', 'CSS']}
            />

            <SkillCard
                title="Frameworks y librerías"
                skills={['Spring Boot', 'React', 'Express', 'Thymeleaf']}
            />

            <SkillCard
                title="Bases de datos"
                skills={['SQL Server', 'MongoDB', 'H2']}
            />

            <SkillCard
                title="Herramientas"
                skills={['Git', 'GitHub', 'IntelliJ IDEA', 'Visual Studio', 'Azure DevOps']}
            />

            </div>

        </section>
    )
}

export default Skills