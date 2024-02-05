import '../assets/cssComponents/header.css'

export function Header() {
    return (
        <header className="navbar">
        
            {/* <img src="/src/assets/images/animatedPhoto.png"
                alt="Animated photo of myself" 
                className="photoCover" /> */}

            <p className='logo'>FerGarPer</p> 
        
            <nav class="navLinks">
                <ul>
                    <a href="#aboutMe" className="linksNav"><li>About me</li></a>
                    <a href="#projects" className="linksNav"><li>Projects</li></a>
                    <a href="#skills" className="linksNav"><li>Skills</li></a>
                    <a href="#contactMe" className="linksNav"><li>Contact me</li></a>
                </ul>
            </nav>
        </header>
    )
}

