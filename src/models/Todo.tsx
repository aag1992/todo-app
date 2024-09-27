import { Priority } from '../models/Priority';

import { Status } from '../models/TodoStatus';


export interface Todo { text: string , priority:Priority, description: string, status: Status } 
