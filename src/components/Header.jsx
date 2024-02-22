import '../assets/cssComponents/header.css'
import { ContactMe } from './ContactMe'

export function Header({ setForm }) {
    return (
        <header className="navbar backdrop-blur-md bg-dark-200/30 dark:bg-dark-900/30 sticky w-full z-20 top-0 pt-4">

            <p className='logo'>FerGarPer</p> 
        
            <nav className="navLinks">
                <ul>
                    <a href="#aboutMe" className="linksNav"><li>About me</li></a>
                    <a href="#projects" className="linksNav"><li>Projects</li></a>
                    <a href="#skills" className="linksNav"><li>Skills</li></a>
                    <a onClick={() => {
                        setForm(true);
                    }} className="linksNav"><li>Contact me</li></a>
                </ul>
            </nav>
        </header>
    )
}

