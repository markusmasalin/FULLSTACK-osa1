import React from 'react';
import ReactDOM from 'react-dom';

const Header = (props) => {
    return (
    <div>
    <h1>
        {props.course}
    </h1>
    </div>
    )
}

const Content = (props) => {
    return(
    <div>
       <Part part={props.parts[0]}  />
       
       <Part part={props.parts[1]} /> 
       <Part part={props.parts[2]}   /> 
    </div>
    )    
}

const Part = (props) => {
    return(
    <div>
    <p> 
        {props.part.name} {props.part.exercises}
    </p>
    </div>
    )
}

const Total = (props) => {
    return (
    <div>
    <p>yhteensä 
        
        {" " + Summa(props.total)}  tehtävää
    </p>
    </div>
    ) 

}

const Summa = (parts) => {
    let sum = 0;
    parts.map(part => {
        sum += part.exercises;

    })
    
    return sum;
}


const App = () => {
    const course = {
        name: 'Half Stack -sovelluskehitys', 
        parts: [
        {
            name: 'Reactin perusteet',
            exercises: 10
        }, 
        {
            name: 'Tiedonvälitys propseilla',
            exercises: 7
        },
        {
            name: 'Komponenttien tila',
            exercises: 14
        }
        ]
    }
    return (
      <div>
        <Header course={course.name} />
        <Content parts={course.parts} />
        <Total total={course.parts} />
        
      </div>
    )
  }
  
  ReactDOM.render(<App />, document.getElementById('root'))
