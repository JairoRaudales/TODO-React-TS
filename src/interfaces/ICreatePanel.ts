import { ITask } from "./ITask";

export interface ICreatePanelProps {
    name: string;
    tasks: ITask[];
    onSave: (newpanel: ICreatePanelProps) => void;
    changeStatus: (taskId: number, status: string) => void;
    deleteTask: (TaskId: number) => void;
    children?: React.ReactNode;
    
}