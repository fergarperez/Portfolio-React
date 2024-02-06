import '../assets/cssComponents/mainCover.css'
import AnimatedPhoto from '../assets/images/animatedPhoto.png'
import { CV } from '../assets/icons/CV'
import { Github } from '../assets/icons/Github'
import { Linkedin } from '../assets/icons/Linkedin'
import { Mail } from '../assets/icons/Mail'

export function MainCover() {
    return (
        <article className="mainCover">
            <section id="leftCover">
                <img src={AnimatedPhoto} alt="Animated photo of myself" />
            </section>
            <section id="rightCover">
                <h1 className="title">Hi, I am a <span>Web Developer</span></h1>
                <span className="subtitle">Passionated about the software evironment</span>
                <ul>
                    <a href="https://drive.google.com/file/d/1yos083TrScueGdE-Nlm1Li__da5sZhYk/view?usp=sharing" className="iconsCover">
                        <li>
                            <CV />
                        </li>
                    </a>
                    <a href="https://github.com/fergarperez" className="iconsCover">
                        <li>
                            <Github />
                        </li>
                    </a>
                    <a href="https://www.linkedin.com/in/fernando-garfella/" className="iconsCover">
                        <li className="iconsCover">
                            <Linkedin />
                        </li>
                    </a>
                    <a href="mailto:fgarfella1@gmail.com" className="iconsCover">
                        <li>
                            <Mail />
                        </li>
                    </a>
                </ul>
            </section>
        </article>
    )
}