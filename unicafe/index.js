import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
  return (
  <div>
  <h1>
      {props.name}
  </h1>
  </div>
  )
}

const Statistic = (props) => {
  if (props.total===0){
    return (
    <table>
      <tbody>
        <tr>
        <td>
          {props.totaltext}
        </td>
      </tr>
      </tbody>
    </table>
    )
  }
  return (
  
  <table>
    <tbody>
      <tr>
        <td>{props.text+ ": "}</td>
        <td> {props.value}</td>
      </tr>
    </tbody> 
  </table>   
  
  )
}

const Button = (props) => { 
  console.log(props)
  const { handleClick, text } = props
  return (
    <button onClick={handleClick}>
      {text}
    </button>
  )
}

const App = (props) => {
  const name = 'anna palautetta'
  const name2 = 'statistiikka'
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const total = good + bad + neutral
  const averige = (good-bad)/(total)
  const percent = (good/total)*100
  const [allClicks, setAll] = useState(0)

  const handleGoodClick = () => {
    setAll(allClicks +1)
    setGood(good + 1)
  }
  const handleNeutralClick = () => {
    setNeutral(neutral + 1)
  }

  const handleBadClick = () => {
    setAll(allClicks -1)
    setBad(bad + 1)
  }

  return (
    <div>
      <div>
      <Header name={name} /> 
      </div>
      <div>
        <Button handleClick={handleGoodClick} text='hyvä' />
        <Button handleClick={handleNeutralClick} text='neutraali' />
        <Button handleClick={handleBadClick} text='huono' />
        <Header name={name2} />
      </div>
    
    
          <Statistic text="hyvä" value ={good} total={total} totaltext="Ei yhtään palautetta annettu"/>
      
          <Statistic text="neutraali" value ={neutral} total={total} />
         
          <Statistic text="huono" value ={bad} total={total} />
        
          <Statistic text="yhteensä" value ={total} total={total} />
        
          <Statistic text="keskiarvo" value ={averige} total={total}/>
        
          <Statistic text="positiivisia" value ={percent + "%"} total={total} />
        
      </div>
  )
}

ReactDOM.render(
  <App />, 
  document.getElementById('root')
)
