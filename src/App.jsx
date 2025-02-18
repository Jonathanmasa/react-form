import { useState } from 'react'
import './App.css'

// importo bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  // Lista iniziale di articoli
  const [tasks, setTasks] = useState([
    'Come imparare React velocemente',
    '10 trucchi per scrivere codice migliore',
    'Guida completa a JavaScript',
    'Le migliori librerie UI per il 2024',
    'Come ottimizzare il tuo sito web',
  ]);

  // Stato per il nuovo articolo
  const [newTask, setNewTask] = useState('');

  // Funzione per aggiungere un nuovo articolo
  const addTask = (e) => {
    e.preventDefault();
    
    // evito stringhe vuote
    if (!newTask.trim()) return;
    
    // Creo un nuovo array con il nuovo articolo
    setTasks([...tasks, newTask]);
    setNewTask(''); 
  };

  return (
    <>
      <h2>Lista articoli</h2>
      <ul>
        {tasks.map((task, i) => (
          <li key={i}>{task}</li>
        ))}
      </ul>

      {/* Form per aggiungere un nuovo articolo */}
      <form onSubmit={addTask}>
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Inserisci un nuovo articolo"
        />
        <button type="submit">Aggiungi</button>
      </form>
    </>
  );
}


export default App
