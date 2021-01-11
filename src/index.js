import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Statistic = ({text, value}) => {
  return (
    <tr>
    <td>{text}</td>
    <td>{value}</td>
    </tr>
  )
}

const Statistics = ({good, neutral, bad, all}) => {
  if(all===0) {
    return (
      <div>
        <h1>statistics</h1>
        <p>No feedback given</p>
      </div>
    )
  }
  return (
    <table>
      <thead>
        <tr>
          <th></th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <Statistic text="good" value = {good} />
        <Statistic text="neutral" value = {neutral} />
        <Statistic text="bad" value = {bad} />
        <Statistic text="all" value = {all} />
        <Statistic text="total" value = {(good-bad)/all} />
        <Statistic text="average" value = {(good/all*100)+"%"} />
      </tbody>
    </table>
  )
}

const Button = ({text, value, theFunction}) => {
  return (
    <button onClick={() => theFunction(value+1)}>{text}</button>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>give feedback</h1>
      <Button text={"good"} value={good} theFunction={setGood}/>
      <Button text={"neutral"} value={neutral} theFunction={setNeutral}/>
      <Button text={"bad"} value={bad} theFunction={setBad}/>
      <h1>statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad} all={good+neutral+bad}/>
    </div>
  )
}


ReactDOM.render(<App />, 
  document.getElementById('root')
)