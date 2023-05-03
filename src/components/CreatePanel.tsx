import { useState } from 'react';

import { INewPanelProps } from '../interfaces/INewPanel'
import Card from './Card'
import NewPanel from './NewPanel';
import { IPanelProps } from '../interfaces/IPanel'



function CreatePanel(props: INewPanelProps) {

    

    return (
        <div className="columna">
            <button className="delete-section-btn">Eliminar</button>
            <h2> { props.name } </h2>
            {  
                props.tasks.map((task) => {
                    return (
                        <Card 
                            task={task} 
                            changeStatus={props.changeStatus} 
                            deleteTask={props.deleteTask}
                        />
                    )
                })
            }
        </div>
    )
}

export default CreatePanel;