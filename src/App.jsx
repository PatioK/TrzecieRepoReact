import { useState, useEffect } from 'react'
import axios from 'axios'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  useEffect(() => {
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        setPersons(response.data)
      })
  }, [])

  const addPerson = (event) => {
    event.preventDefault()

    const personObject = {
      name: newName,
      number: newNumber
    }

    axios
      .post('http://localhost:3001/persons', personObject)
      .then(response => {
        setPersons(persons.concat(response.data))
        setNewName('')
        setNewNumber('')
      })
  }

  return (
    <div>
      <h2>Phonebook</h2>

      <form onSubmit={addPerson}>
        <div>
          name: 
          <input value={newName} onChange={(e)=>setNewName(e.target.value)} />
        </div>
        <div>
          number:
          <input value={newNumber} onChange={(e)=>setNewNumber(e.target.value)} />
        </div>
        <button type="submit">add</button>
      </form>

      <ul>
        {persons.map(p =>
          <li key={p.id}>
            {p.name} {p.number}
          </li>
        )}
      </ul>
    </div>
  )
}

export default App