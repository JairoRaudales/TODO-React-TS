import { useState } from 'react';

import { IPanelProps } from '../interfaces/IPanel'
import Card from './Card'
import { ITask } from '../interfaces/ITask';

function Panel(props: IPanelProps) {
    const [showPanel, setShowPanel] = useState(true);

    const handleDeletePanel = () => {
        setShowPanel(false);
    }

    return (
        <div className={`columna ${showPanel ? '' : 'hide'}`}>
            <div>
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
                <button className="delete-panel-btn" onClick={handleDeletePanel}>Eliminar panel</button>
            </div>
        </div>
    )
}

export default Panel;