import { useState } from 'react'
import './App.css'

// importo bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  const [tasks, setTasks] = useState(['Fare la spesa']);
  const [newTask, setNewTask] = useState('');
  const addTask = e => {
    e.preventDefault();
    tasks.push(newTask);
  }
  return (
<>
  <form onSubmit={addTask}>

    <input
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        placeholder="Inserisci nuovo articolo"
    />

    <button type="submit">Aggiungi</button>

  </form>

    lista articoli
      <ul>
        {tasks.map((task, i) => (
          <li key={i}>{task}</li>
        ))}
      </ul>
</>
)}


export default App
