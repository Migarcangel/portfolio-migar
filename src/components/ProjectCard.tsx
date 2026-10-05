interface ProjectCardProps {
    title: string
    description: string
    technologies: string[]
    github?: string
    demo?: string
}

function ProjectCard({
    title,
    description,
    technologies,
    github,
    demo
}: ProjectCardProps) {
    return (
        <article className="project-card">
            <h3>{title}</h3>

            <p>{description}</p>

            <div className="project-technologies">
                {technologies.map((technology) => (
                    <span key={technology}>{technology}</span>
                ))}
            </div>

            <div className="project-links">
                {github && <a href={github}>GitHub</a>}
                {demo && <a href={demo}>Demo</a>}
            </div>
        </article>
    )
}

export default ProjectCard