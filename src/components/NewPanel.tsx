/* import { useState , useEffect } from 'react';

import { INewPanelProps } from '../interfaces/INewPanel'


function NewPanel(props: INewPanelProps) {

    const [error, setError] = useState<string[]>([])
    const [inputValue, setInputValue] = useState('');
      const [panelName, setPanelName] = useState('');



    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setPanelName(event.target.value.trim()); // Actualiza el estado con el valor del input sin espacios en blanco al inicio y al final
    }
    
  
    const handleAddClick = () => {
      if (panelName !== '') { // Verifica que el nombre del panel no sea vacío
        const newpanel: INewPanelProps = { // Crea el nuevo panel con el nombre ingresado
          name: panelName,
          tasks: [],
          onSave: () => {}
        
        };
        props.onSave(newpanel); // Llama a la función onSave del props para guardar el nuevo panel
        setPanelName(''); // Limpia el input
      }
    }


/*     const validateForm = () => {
        
        let newError: string[] = [];
        

        if(!props.task.name || props.task.name === '') {            
            newError = [...newError, 'El Panel ya existe']            
        }

       
    }
 */

/*     return (
        <div className="newpanel">
        <h2>Agregar nuevo Panel</h2>
        <form>
          <label htmlFor="filtro-tarea">Panel:</label>
          <input type="text" id="newpanel" name="newpanel" placeholder="New Panel Name" value={panelName} onChange={handleInputChange} />
          {panelName ? (
            <button type="button" onClick={handleAddClick}>Add</button>
          ) : null}
          <ul>
            <li></li>
          </ul>
        </form>
      </div>


    )
}

export default NewPanel; */ 
import { useState } from 'react';
import { INewPanelProps } from '../interfaces/INewPanel';
import Card from './Card';
import Panel from './Panel';
import CreatePanel from './CreatePanel';
import { title } from 'process';

function NewPanel(props: INewPanelProps) {
  const [newPanelName, setNewPanelName] = useState('');
  const [panels, setPanels] = useState<{ name: string; tasks: any[] }[]>([]);

  function handleChangeStatus( taskIndex:number, status: string) {
    // Lógica para cambiar el estado de la tarea
  }

  function handleDeleteTask(taskIndex:number) {
    // Lógica para eliminar la tarea
  }

  const handleAddClick = () => {
    const newPanel = {
      name: newPanelName,
      tasks: [],
    };
    setPanels([...panels, newPanel]);
    setNewPanelName('');
  };

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewPanelName(event.target.value);
  };

  return (
    <div className="newpanel">
      <h2>Agregar nuevo Panel</h2>
      <form>
        <label htmlFor="filtro-tarea">Panel:</label>
        <input
          type="text"
          id="newpanel"
          name="newpanel"
          placeholder="New Panel Name"
          value={newPanelName}
          onChange={handleNameChange}
        />
        <button type="button" onClick={handleAddClick}>
          Add
        </button>
      </form>
      <div className="panel-container">
      {panels.map((newpanel) => (
        <Panel title={newpanel.name} tasks={newpanel.tasks}  changeStatus={handleChangeStatus}
        deleteTask={handleDeleteTask}>
          <button className="delete-section-btn">Eliminar</button>
            <h2> { title } </h2>
          {newpanel.tasks.map((task) => (
            <Card
              task={task}
              changeStatus={props.changeStatus}
              deleteTask={props.deleteTask}
            />
          ))}
        </Panel>
      ))}
      </div>
    </div>
  );
}

export default NewPanel;