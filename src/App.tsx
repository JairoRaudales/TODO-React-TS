import { useState , useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

import { ITask } from './interfaces/ITask' 

import TaskForm from './components/TaskForm'
import Panel from './components/Panel'
import { IPanelProps } from './interfaces/IPanel';
import { IPanel } from './interfaces/IPanel';

import NewPanel from './components/NewPanel'
import Filter from './components/Filter';


function App() {

  const [id, setId] = useState<number>(0)
  const [task, setTask] = useState<ITask>({ "status" : "TODO", "id": 0 })
  const [taskList, setTaskList] = useState<ITask[]>([])
  const [teams, setTeams] = useState<string[]>(["Development", "QA", "PMs", "BI"])
  const [filtro, setFiltro] = useState<string>("");

  const [panels, setPanels] = useState<IPanel[]>([  {    title: "Tareas Pendientes",    tasks: [],
  changeStatus: () => {},
  deleteTask: () => {},
},
{
  title: "Tareas en progreso",
  tasks: [],
  changeStatus: () => {},
  deleteTask: () => {},
},
{
  title: "Tareas Completadas",
  tasks: [],
  changeStatus: () => {},
  deleteTask: () => {},
},
]);


  

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTask({...task, [e.target.name]: e.target.value})
  }

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setTask({...task, [e.target.name]: e.target.value})
  }

  const changeStatus = (id: number, status: string) => {
    const newTaskList = taskList.map((task) => {
      if (task.id === id) {
        task.status = status;
      }
      return task;
    });
    setTaskList(newTaskList);
  
    const newPanels = panels.map((panel) => {
      const newTasks = panel.tasks.map((task) => {
        if (task.id === id) {
          task.status = status;
        }
        return task;
      });
      return { ...panel, tasks: newTasks };
    });
  
    setPanels(newPanels);
  };
  

  const deleteTask = (id: number) => {
    const newTaskList = taskList.filter((task) => task.id !== id);
    setTaskList(newTaskList);
  
    const newPanels = panels.map((panel) => {
      const newTasks = panel.tasks.filter((task) => task.id !== id);
      return { ...panel, tasks: newTasks };
    });
  
    setPanels(newPanels);
  };
  
  

  const addTask = () => {
  const newId: number = id + 1;
  setId(newId);

  const newTask: ITask = {
    id: newId,
    status: "TODO",
    name: task.name,
    team: task.team,
    hours: task.hours,
  };

  const pendientesPanel = panels.find(
    (panel) => panel.title === "Tareas Pendientes"
  );
  const progresoPanel = panels.find(
    (panel) => panel.title === "Tareas en progreso"
  );
  const completadasPanel = panels.find(
    (panel) => panel.title === "Tareas Completadas"
  );

  if (newTask.status === "TODO" && pendientesPanel) {
    pendientesPanel.tasks.push(newTask);
  } else if (newTask.status === "IN_PROGRESS" && progresoPanel) {
    progresoPanel.tasks.push(newTask);
  } else if (newTask.status === "DONE" && completadasPanel) {
    completadasPanel.tasks.push(newTask);
  }

  setTask({
    id: newId,
    status: "TODO",
    name: "",
    team: "",
    hours: 0,
  });
};

    // FILTRAMOS LA LISTA DE TAREAS
    const onChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
      setFiltro(e.target.value);
    };
    // los resultados los guardamos en el manejoFiltros
    const manejoFiltros: ITask[] = [];
    //con el bluce iteramos y obtenemos los nombres y equipos de las tareas 
    for (let i = 0; i < taskList.length; i++) {
      const task = taskList[i];
      const taskName = task.name?.toLowerCase();
      const taskTeam = task.team?.toLowerCase();
      const filterLower = filtro.toLowerCase();
  
      if (taskName && taskName.includes(filterLower)) {
        manejoFiltros.push(task);
      } else if (taskTeam && taskTeam.includes(filterLower)) {
        manejoFiltros.push(task);
      }
    }
  



  const addPanel = (title: string) => {
    const newPanel: IPanel = { title, tasks: [], changeStatus: () => {}, deleteTask: () => {} };
    setPanels([...panels, newPanel]);
  };
  
  return (
    <div className="App">
    <header>
      <h1>TODO List</h1>
    </header>

    <div className="container">
      <NewPanel onAddPanel={addPanel} panels={panels}/>
      
      <TaskForm
        task={task}
        teams={teams}
        onChangeInput={handleInputChange}
        onChangeSelect={handleSelectChange}
        onSave={addTask}
      />

      <Filter keyName={filtro} onChangeSelect={onChange} />



      <div className="columnas">
      {panels.map((panel) => (
          <Panel
          key={panel.title}
          title={panel.title}
          tasks={panel.tasks} // aquí se pasa la lista de tareas del panel
            changeStatus={changeStatus}
            deleteTask={deleteTask}
          />
        ))}
      </div>
    </div>
  </div>
  );
}


export default App;
