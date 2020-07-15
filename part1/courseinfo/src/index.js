import React from 'react';
import ReactDOM from 'react-dom';

  const course = {
	name: 'Half Stack application development',
	parts: [
		{
			name: 'Fundamentals of React',
			exercises: 10
		},
		{
			name: 'Using props to pass data',
			exercises: 7
		},
		{
			name: 'State of a component',
			exercises: 14
		}
	]
  }

const App = () => {
	return [
		<Header course={course} />,
		<Content course={course} />,
		<Total course={course} />,
	]
}

const Header = (props) => {
	return (
      		<h1>{props.course.name}</h1>
	)
}

const Content = (props) => {
	return (
		<div>
			<Part part={course.parts[0]} />
			<Part part={course.parts[1]} />
			<Part part={course.parts[2]} />
		</div>
	)
}

const Part = (props) => {
	return (
		<div>
			<p>
				{props.part.name} {props.part.exercises}
			</p>
		</div>
	)
}

const Total = (props) =>  {
	return (
		<p>
			Number of exercises {
				props.course.parts[0].exercises + 
				props.course.parts[1].exercises + 
				props.course.parts[2].exercises
			}
		</p>
	)
}

ReactDOM.render(<App />, document.getElementById('root'))
