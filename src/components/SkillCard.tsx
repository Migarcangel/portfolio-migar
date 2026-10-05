interface SkillCardProps {
    title: string
    skills: string[]
}

function SkillCard({ title, skills }: SkillCardProps) {
    return (
        <div className="skill-card">
            <h3>{title}</h3>

            <hr />
            
            {skills.map(skill => (
                <p key={skill}>{skill}</p>
            ))}
        </div>
    )
}

export default SkillCard;