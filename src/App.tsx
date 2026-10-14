import './App.css'

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
    return (
        <>
            <Navbar />

            <main>
                <Hero />
                <hr></hr>
                <About />
                <hr></hr>
                <Skills />
                <hr></hr>
                <Projects />
                <hr></hr>
                <Experience />
                <hr></hr>
                <Contact />
            </main>

            <Footer />
        </>
    )
}

export default App