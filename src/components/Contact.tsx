import './Contact.css'

import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'
import { SiCurseforge } from 'react-icons/si'

function Contact() {
    return (
        <section id="contact" className="contact">

            <h2>¡Ponte en contacto conmigo!</h2>

            <div className="contact-links">
                <a href="https://github.com/Migarcangel" target="_blank" rel="noreferrer">
                <FaGithub />
                    GitHub
                </a>

                <a href="https://www.linkedin.com/in/miguel-%C3%A1ngel-arribas-casero-0733a92b3/" target="_blank" rel="noreferrer">
                < FaLinkedin />
                    LinkedIn
                </a>

                <a href="https://www.curseforge.com/members/migar450/projects" target="_blank" rel="noreferrer">
                <SiCurseforge />
                    CurseForge
                </a>

                <a href="mailto:migarcangel9@gmail.com">
                    <FaEnvelope />
                    Correo
                </a>
            </div>

            <form action="https://formspree.io/f/mljgjajj" method="POST">
                <div>
                    <label htmlFor="name">Nombre</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Tu nombre"
                        required
                    />
                </div>

                <div>
                    <label htmlFor="email">Correo electrónico</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="tu@email.com"
                        required
                    />
                </div>

                <div>
                    <label htmlFor="subject">Asunto</label>
                    <input
                        type="text"
                        id="subject"
                        name="subject"
                        placeholder="¿En qué puedo ayudarte?"
                        required
                    />
                </div>

                <div>
                    <label htmlFor="message">Mensaje</label>
                    <textarea
                        id="message"
                        name="message"
                        placeholder="Escribe tu mensaje..."
                        rows={6}
                        required
                    />
                </div>

                <button type="submit">Enviar mensaje</button>
            </form>

        </section>
    )
}

export default Contact