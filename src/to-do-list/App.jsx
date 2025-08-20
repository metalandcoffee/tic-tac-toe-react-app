import { useState } from 'react';

// const DEFAULT_TASK = [
//   'Walk the dog',
//   'Water the plants',
//   'Wash the dishes',
// ];
const localStorageTasks = localStorage.getItem('tasks') || [];

export default function App() {
  const [tasks, setTasks] = useState(JSON.parse(localStorageTasks));
  const [newTask, setNewTask] = useState('');

  const list = tasks.map(( task, id ) => {
    return <li key={ id }>
      <span>{ task }</span>
      <button onClick={() => handleDelete( id )}>Delete</button>
    </li>
  });

  const handleAdd = () => {
    if (!newTask) return;
    const nextTasks = [...tasks, newTask];
    setTasks(nextTasks);
    localStorage.setItem('tasks', JSON.stringify(nextTasks));
    setNewTask('');
  }

  const handleDelete = ( removeId ) => {
    const nextTasks = tasks.filter((task, id) => id !== removeId );
    localStorage.setItem('tasks', JSON.stringify(nextTasks));
    setTasks(nextTasks);
  }

  return (
    <div>
      <h1>Todo List</h1>
      <div>
        <input
          type="text"
          placeholder="Add your task"
          value={ newTask }
          onChange={ (event) => setNewTask(event.target.value) }
        />
        <div>
          <button onClick={handleAdd}>Submit</button>
        </div>
      </div>
      <ul>{ list }</ul>
    </div>
  );
}
