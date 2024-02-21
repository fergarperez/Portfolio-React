import '../assets/cssComponents/projects.css'
import { Github } from '../assets/icons/Github'
import { Demo } from '../assets/icons/Demo' 
import { JavaScript } from '../assets/icons/JavaScript'
import { HTML } from '../assets/icons/HTML' 
import { CSS } from '../assets/icons/CSS'
import { React } from '../assets/icons/React'
import { Java } from '../assets/icons/Java'
import Timmer from '../assets/images/Timmer.png'
import TicTacToe from '../assets/images/TicTacToe.png'
import TodoList from '../assets/images/TodoList.png'

function Project ({ header, description, image, url, demoUrl, icons }) {

	return (
		<section className='projectsSection'>

			<img
				src={image}
				alt={description} />

			<h3> {header} </h3>

			<p> {description} </p>

			<div>
				<a href={url}> Code <Github /> </a>
				{
					demoUrl ? 
					( <a href={demoUrl}> Demo <Demo /></a> )  : 
					null
				}

				<ul>
					{icons.map((item, index) => {
						return (
							<li key={index} className='iconsProjects'>{item}</li>
						)
					})}
				</ul>
			</div>
		</section >
	)
}

export function Projects() {

	const project = [
		{
			name: "Hangman",
			description: "This is a project which I developed in Java, where I had " +
				"to use some features like GUI, DB, Sockets and Threads",
			image: "https://via.placeholder.com/400",
			url: "https://github.com/fergarperez/Hangman",
			demoUrl: "",
			icons: [<Java />],
		},
		{
			name: "Timmer Project",
			description: "This is a JavaScript project which I did to get more used " +
				"to the language itself, and I did it using a tutorial from Bro Code",
			image: Timmer,
			url: "https://github.com/fergarperez/Timer-mini-project",
			demoUrl: "https://fergarperez.github.io/Timer-mini-project/",
			icons: [<HTML />, <CSS />, <JavaScript />]
		},
		{
			name: "Tic Tac Toe",
			description: "This is a JavaScript project which is a game of tic tac toe" +
				"which I used a tutorial from Midudev for learning purposes while"
				+ " learning his React Course",
			image: TicTacToe,
			url: "https://github.com/fergarperez/Tic-Tac-Toe-React",
			demoUrl: "https://tic-tac-toe-react-rho-ten.vercel.app/",
			icons: [<HTML />, <CSS />, <JavaScript />, <React />]
		},
		{
			name: "Todo List App",
			description: "This is a Todo List App which I made by my own using ReactJS" + 
			" for learning purposes",
			image: TodoList,
			url: "https://github.com/fergarperez/Todo-List-App",
			demoUrl: "https://todo-list-app-ten-lilac.vercel.app/",
			icons: [<HTML />, <CSS />, <JavaScript />, <React />]
		}
	]

	return (
		<article id="projects" className='projects'>

			<h2 className='headers'> Projects {"</>"}</h2>

			<section className="allProjects">
				{
					project.map((item) => {
						return <Project
							key={item.name}
							header={item.name}
							description={item.description}
							image={item.image}
							url={item.url}
							prueba={item.prueba}
							demoUrl={item.demoUrl}
							icons={item.icons} />
					})
				}
			</section>
		</article>
	)
}