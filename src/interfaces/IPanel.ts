import { ITask } from "./ITask";

export interface IPanelProps {
    title: string;
    tasks: ITask[];
    changeStatus: (id: number, status: string) => void;
    deleteTask: (id: number) => void;
}

export interface IPanel extends IPanelProps {
  // todas las propiedades de IPanelProps están incluidas
  // por lo que no es necesario agregar nada aquí
}

export interface INewPanelProps {
    onAddPanel: (title: string) => void;
    panels: string[];
}

