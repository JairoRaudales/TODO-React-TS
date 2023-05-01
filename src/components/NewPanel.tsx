import { useState , useEffect } from 'react';

import { INewPanelProps } from '../interfaces/INewPanel'


function NewPanel(props: INewPanelProps) {

    const [error, setError] = useState<string[]>([])
    const [inputValue, setInputValue] = useState('');
    const [panelName, setPanelName] = useState<string>('');


    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setPanelName(event.target.value.trim()); // Actualiza el estado con el valor del input sin espacios en blanco al inicio y al final
    }
    
  
    const handleAddClick = () => {
      if (panelName !== '') { // Verifica que el nombre del panel no sea vacío
        const newpanel: INewPanelProps = { // Crea el nuevo panel con el nombre ingresado
          name: panelName,
          tasks: [],
          task: {},
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




    return (
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

export default NewPanel;