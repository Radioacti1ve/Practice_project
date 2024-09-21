import { IToDoItem } from "../types";
import { Api } from "./base/Api";

export class ToDoApi extends Api {

  getTasks(): Promise<IToDoItem[]> {
    return this.get<IToDoItem[]>('/todos');
  }

  deleteTask(data: Partial<IToDoItem>): Promise<IToDoItem> {
    return this.post<IToDoItem>('/todos', data, 'DELETE');
  }

  editTasks(data: Partial<IToDoItem>): Promise<IToDoItem> {
    return this.post('/todos', data, 'PATCH');
  }

  addTask(data: Partial<IToDoItem>): Promise<IToDoItem> {
    return this.post('/todos', data);
  }
  
}