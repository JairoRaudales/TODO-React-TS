import { ITask } from "./ITask";

export interface INewPanelProps {
    name: string;
    tasks: any[];
    onSave: (newpanel: INewPanelProps) => void;
    changeStatus: (taskId: number, status: string) => void;
    deleteTask: (taskId: number) => void;
    children?: React.ReactNode;
}
    
