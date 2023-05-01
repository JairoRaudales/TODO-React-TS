import { useState } from 'react';

import { IPanelProps } from '../interfaces/IPanel'
import Card from './Card'
import NewPanel from './NewPanel';

function Panel(props: IPanelProps) {

    return (
        <div className="columna">
            <button className="delete-section-btn">Eliminar</button>
            <h2> { props.title } </h2>
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

export default Panel;