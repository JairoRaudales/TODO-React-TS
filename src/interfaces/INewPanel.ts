import { ITask } from "./ITask";

export interface INewPanelProps {
    task: { };
    name: string;
    tasks: [];
    onSave: (panel: INewPanelProps) => void;
    

}