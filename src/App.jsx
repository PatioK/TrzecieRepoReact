import { useState } from 'react'

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGood = () => setGood(good + 1)
  const handleNeutral = () => setNeutral(neutral + 1)
  const handleBad = () => setBad(bad + 1)

  const total = good + neutral + bad
  const average = total === 0
    ? 0
    : (good * 1 + bad * -1) / total
  const positivePercentage = total === 0
    ? '0%'
    : `${(good / total * 100).toFixed(1)}%`

  return (
    <div>
      <h1>give feedback</h1>
      <button onClick={handleGood}>good</button>
      <button onClick={handleNeutral}>neutral</button>
      <button onClick={handleBad}>bad</button>

      <h2>statistics</h2>
      <div>good: {good}</div>
      <div>neutral: {neutral}</div>
      <div>bad: {bad}</div>
      <div>all: {total}</div>
      <div>average: {average}</div>
      <div>positive: {positivePercentage}</div>
    </div>
  )
}

export default App
