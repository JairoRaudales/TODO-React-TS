import { ITask } from "./ITask";

export interface IPanelProps {
    title: string;
    tasks: any[];
    changeStatus: (taskId: number, status: string ) => void;
    deleteTask: (taskId: number) => void;
    children?: React.ReactNode;
}