import { useState } from 'react'

const Statistics = (props) => {
  const { good, neutral, bad } = props
  const all = good + neutral + bad

  if (all === 0) {
    return <div>No feedback given</div>
  }

  const average = (good - bad) / all
  const positive = (good / all) * 100

  return (
    <div>
      <h2>Statistics</h2>
      <table>
        <tbody>
          <tr><td>Good:</td><td>{good}</td></tr>
          <tr><td>Neutral:</td><td>{neutral}</td></tr>
          <tr><td>Bad:</td><td>{bad}</td></tr>
          <tr><td>All:</td><td>{all}</td></tr>
          <tr><td>Average:</td><td>{average.toFixed(2)}</td></tr>
          <tr><td>Positive:</td><td>{positive.toFixed(2)} %</td></tr>
        </tbody>
      </table>
    </div>
  )
}

const Button = ({ onClick, text }) => (
  <button onClick={onClick}>{text}</button>
)

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGood = () => setGood(good + 1)
  const handleNeutral = () => setNeutral(neutral + 1)
  const handleBad = () => setBad(bad + 1)

  return (
    <div>
      <h1>Give feedback</h1>
      <Button onClick={handleGood} text="Good" />
      <Button onClick={handleNeutral} text="Neutral" />
      <Button onClick={handleBad} text="Bad" />

      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App
