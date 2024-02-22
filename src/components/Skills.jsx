import '../assets/cssComponents/skills.css'
import { JavaScript } from '../assets/icons/JavaScript'
import { HTML } from '../assets/icons/HTML'
import { CSS } from '../assets/icons/CSS'
import { React } from '../assets/icons/React'
import { Github } from '../assets/icons/Github'
import { Java } from '../assets/icons/Java'
import { PHP } from '../assets/icons/PHP'
import { Azure } from '../assets/icons/Azure'
import { MySQL } from '../assets/icons/MySQL'
import { AWS } from '../assets/icons/AWS'
import { NextJS } from '../assets/icons/NextJS'

export function Skills() {

	const icons = [<JavaScript />, <HTML />, <CSS />, <Java />, <PHP />, <AWS />,
					<Azure />, <React />, <NextJS />, <MySQL />, <Github />]

	return (
		<article id="skills" className='skills'>

			<h2 className='headers'> Skills </h2>

			<ul>
				{
					icons.map( (icon, index) => {
						return (
							<li
							key={index}>
								{icon}
							</li>
						)
					})
				}
			</ul>

		</article>
	)
}