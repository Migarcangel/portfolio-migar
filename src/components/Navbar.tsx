import { useState } from 'react'
import './Navbar.css'

function Navbar() {
  const [open, setOpen] = useState(false)
  const close = () => setOpen(false)

  return (
    <nav>
      <a href="#" onClick={close}>Miguel Ángel</a>

      <button
        className="nav-toggle"
        onClick={() => setOpen(!open)}
        aria-label="Abrir menú"
        aria-expanded={open}
      >
        {open ? '✕' : '☰'}
      </button>

      <div className={`nav-links ${open ? 'open' : ''}`}>
        <a href="#about" onClick={close}>Sobre mí</a>
        <a href="#skills" onClick={close}>Tecnologías</a>
        <a href="#projects" onClick={close}>Proyectos</a>
        <a href="#experience" onClick={close}>Experiencia</a>
        <a href="#contact" onClick={close}>Contacto</a>
      </div>
    </nav>
  )
}

export default Navbar