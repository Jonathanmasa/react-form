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
      <div className="d-flex justify-content-center align-items-center vh-100">
         <div>
              <div className="card">
                  <div className="card-header">
                      <h2 className='mb-4'>Lista articoli</h2>
                  </div>
                  <div className="card-body">
                    <blockquote className="blockquote mb-0">

                      {/* Form per aggiungere un nuovo articolo */}
                      <form onSubmit={addTask}>

                        <input className='mb-3'
                          type="text"
                          value={newTask}
                          onChange={(e) => setNewTask(e.target.value)}
                          placeholder="Inserisci un nuovo articolo"
                        />

                        <button type="submit">Aggiungi</button>

                      </form>
                      <ul>

                        {tasks.map((task, i) => (
                          <li key={i}>{task}</li>
                        ))}

                      </ul>
                    </blockquote>
                  </div>
            </div>
         </div>
      </div>
   </>
  );
}


export default App
