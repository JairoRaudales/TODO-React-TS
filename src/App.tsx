import { useState , useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

import { ITask } from './interfaces/ITask' 

import TaskForm from './components/TaskForm'
import Panel from './components/Panel'
import NewPanel from './components/NewPanel';
import Filter from './components/Filter';
import { INewPanelProps } from './interfaces/INewPanel';


function App() {

  const [id, setId] = useState<number>(0)
  const [task, setTask] = useState<ITask>({ "status" : "TODO", "id": 0 })
  const [taskList, setTaskList] = useState<ITask[]>([])
  const [teams, setTeams] = useState<string[]>(["Development", "QA", "PMs", "BI"])
  const [priority, setPriority] = useState<string[]>(["Alta", "Media", "Baja"])
  const [tasks, setTasks] = useState<ITask[]>([]);
  const [panels, setPanels] = useState<{ name: string; tasks: any[] }[]>([]);

  function handleChangeStatus( taskIndex:number, status: string) {
    // Lógica para cambiar el estado de la tarea
  }

  function handleDeleteTask(taskIndex:number) {
    // Lógica para eliminar la tarea
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTask({...task, [e.target.name]: e.target.value})
  }

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setTask({...task, [e.target.name]: e.target.value})
  }

  const changeStatus = (id: number, status: string) => {
    const newTaskList = taskList.map( task => {
      if(task.id === id) {
        task.status = status
      }
      return task
    })
    setTaskList(newTaskList)
  }

  const deleteTask = (id: number) => {
    const newTaskList = taskList.filter( task => task.id !== id )
    setTaskList(newTaskList)
  }

  const addTask = () => {   
    
    setTaskList([...taskList, task])
    const newId: number = id + 1
    setId(newId)

    setTask({ 
      "id" : newId
      , "status" : "TODO" 
      , "name" : "" 
      , "team" : "" 
      , "hours" : 0 
      , "priority": "media"
    })
  }

  return (
    <div className="App">

      <header>
          <h1>TODO List</h1>
      </header>

      <div className="filtros">
        <NewPanel
           name={""}
           tasks={[]}
           onSave={addTask}
           changeStatus={changeStatus}
           deleteTask={deleteTask}
        />

      <div className="container">
        <TaskForm 
            task={task} 
            teams={teams} 
            onChangeInput={handleInputChange}
            onChangeSelect={handleSelectChange}
            priority={priority}
            onSave={addTask}             
        />

      <div className="filtros">
        <Filter
          teams={teams}
          tasks={[]}
          onFilterChange= {(filter: string) => console.log(`Filter changed to: ${filter}`)}
        
        />

        <div className="columnas">
          <Panel 
            title={"Tareas Pendientes"} 
            tasks={ taskList.filter( task => task.status === 'TODO' ) }
            changeStatus={changeStatus}
            deleteTask={deleteTask}
          />
          <Panel 
            title={"Tareas en progreso"} 
            tasks={ taskList.filter( task => task.status === 'In Progress' ) }
            changeStatus={changeStatus}
            deleteTask={deleteTask}
          />

          <Panel 
            title={"Tareas Completadas"} 
            tasks={ taskList.filter( task => task.status === 'Completed' ) }
            changeStatus={changeStatus}
            deleteTask={deleteTask}
          />
          </div>
        {panels.map((newpanel) => (
        <Panel
          title={newpanel.name}
          tasks={newpanel.tasks}
          changeStatus={handleChangeStatus}
          deleteTask={handleDeleteTask}
        />
         ))}
      </div>
      </div>
    </div>
    </div>
  );
}

export default App;
