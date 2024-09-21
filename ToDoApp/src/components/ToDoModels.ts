import { IToDoItem } from "../types";
import { IEvents } from "./base/Events";

export class ToDoModel {
  protected items: IToDoItem[] = [];

  constructor(protected events: IEvents) {}

  addItem(item: IToDoItem) {
    this.items.unshift(item);
    this.events.emit('items:changed');
  };

  deleteItem(id: number) {
    this.items = this.items.filter(elem => elem.id !== id);
    this.events.emit('items:changed');
  };

  getItems(): IToDoItem[] {
    return this.items;
  };

  getItem(id: number): IToDoItem {
    return this.items.find(elem => elem.id === id);
  };

  checkItem(id: number) {
    const item = this.getItem(id);
    item.completed = !item.completed;
    this.events.emit('items:changed');
  };

  getTotal(): number {
    return this.items.length;
  };

  getDone(): number {
    return this.items.filter(elem => elem.completed).length;
  };

  setItems(items: IToDoItem[]) {
    this.items = items;
    this.events.emit('items:changed');
  };

}