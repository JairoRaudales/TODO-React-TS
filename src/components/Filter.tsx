import { useState , useEffect } from 'react';
import { ITask, IFilterProps } from '../interfaces/ITask'

function Filter(props: IFilterProps){
    return(
        <div className="filtros">
        <h2>Filtros</h2>
        <form>
        
            <label htmlFor="filtro-estado">Equipo:</label>
            <select id="filtro-estado" name="filtro-estado">
                <option value="">Todos</option>
                <option value="QA">QA</option>
                <option value="Development">Development</option>
                
            </select>
            
           
        </form>
    </div>
    )

}

export default Filter;