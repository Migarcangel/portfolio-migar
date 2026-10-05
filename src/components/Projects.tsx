//import './Projects.css'
import ProjectCard from './ProjectCard'

function Projects() {
    return (
        <section id="projects" className="projects">
            <h2>Proyectos</h2>

            <div className="projectcards">
                <ProjectCard
                    title="Potential Crits"
                    description="Mod de Minecraft que añade diferentes efectos relacionados con los golpes críticos."
                    technologies={['Java', 'NeoForge', 'Minecraft']}
                    github="https://github.com/Migarcangel/Potential-Crits-Mod-1.21.1"
                />

                <ProjectCard
                    title="Portfolio"
                    description="Portfolio personal desarrollado para mostrar mis proyectos, experiencia y conocimientos."
                    technologies={['React', 'TypeScript', 'CSS', 'Vite']}
                    github="https://github.com/Migarcangel/portfolio-migar"
                />

                <ProjectCard
                    title="WonderBoot"
                    description="Aplicación web desarrollada para practicar el desarrollo de aplicaciones con Spring Boot."
                    technologies={['Java', 'Spring Boot', 'Thymeleaf', 'JPA', 'H2']}
                    github="..."
                />
            </div>
        </section>
    )
}

export default Projects