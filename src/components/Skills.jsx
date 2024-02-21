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
	return (
		<article id="skills" className='skills'>

			<h2 className='headers'> Skills </h2>

			<ul>
				<li>
					<JavaScript />
				</li>
				<li>
					<HTML />
				</li>
				<li>
					<CSS />
				</li>
				<li>
					<Java />
				</li>
				<li>
					<PHP />
				</li>
				<li>
					<AWS />
				</li>
				<li>
					<Azure />
				</li>
				<li>
					<React />
				</li>
				<li>
					<NextJS />
				</li>
				<li>
					<MySQL />
				</li>
				<li>
					<Github />
				</li>
			</ul>

		</article>
	)
}