import { ITask } from '../interfaces/ITask';
import { IPanelProps } from './IPanel';
import { IPanel } from './IPanel';

export interface INewPanelProps {
  onAddPanel: (title: string) => void;
  panels : IPanelProps[];
}

    
