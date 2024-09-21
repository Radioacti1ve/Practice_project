import { ensureElement } from "../utils/utils";
import { Component } from "./base/Component";

interface IPage {
  toDoList: HTMLElement[];
  taskTotal: number;
  taskDone: number;
}

export class Page extends Component<IPage> {
  protected toDoContainer: HTMLElement;
  protected elementTotal: HTMLElement;
  protected elementDOne: HTMLElement;

  constructor(container: HTMLElement) {
    super(container);
    
    this.toDoContainer = ensureElement('.todos__list', this.container);
    this.elementTotal = ensureElement('.todos__total', this.container);
    this.elementDOne = ensureElement('.todos__done', this.container);
  }

  set toDoList(items: HTMLElement[]) {
    this.toDoContainer.replaceChildren(...items);
  }

  set taskTotal(value: number) {
    this.setText(this.elementTotal, `Всего дел: ${value}`);
  }

  set taskDone(value: number) {
    this.setText(this.elementDOne, `Выполнено: ${value}`);
  }
}