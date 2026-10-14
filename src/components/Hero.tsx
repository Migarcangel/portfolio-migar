import './Hero.css'

function Hero() {
    return (
        <section className="hero">

            <h1>¡Hola! Soy <br />
             Miguel Ángel Arribas Casero</h1>

            <h2>Ingeniero Informático</h2>

            <p>Java - JavaScript</p>

            <p>
                Apasionado por el desarrollo de software y por seguir seguir mejorando como desarrollador.
            </p>

            <div className='hero-links'>
                <a href="#projects">Ver proyectos</a>
                <a href="#contact">Contactar</a>
            </div>
        </section>
    )
}

export default Hero