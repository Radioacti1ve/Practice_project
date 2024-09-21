import { IToDoItem } from "../types";

export class ToDoModel {
  protected items: IToDoItem[] = [];

  constructor() {}

  addItem(item: IToDoItem) {
    this.items.unshift(item);
  };

  deleteItem(id: number) {
    this.items = this.items.filter(elem => elem.id != id);
  };

  getItems(): IToDoItem[] {
    return this.items;
  }

  getItem(id: number): IToDoItem {
    return this.items.find(elem => elem.id === id);
  }

  checkItem(id: number) {
    const item = this.getItem(id);
    item.completed != item.completed;
  }

  getTotal(): number {
    return this.items.length;
  }

  getDone(): number {
    return this.items.filter(elem => elem.completed).length;
  }

  setItems(items: IToDoItem[]) {
    this.items = items;
  }

}