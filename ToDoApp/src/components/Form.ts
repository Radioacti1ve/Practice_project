import { ensureElement } from "../utils/utils";
import { Component } from "./base/Component";
import { IEvents } from "./base/Events";

interface IForm {
  value: string;
  buttonText: string;
}

export class Form extends Component<IForm> {
  protected inputForm: HTMLInputElement;
  protected buttonForm: HTMLButtonElement;

  constructor(container: HTMLElement, protected events: IEvents) {
    super(container);

    this.inputForm = ensureElement('.todo-form__input', this.container) as HTMLInputElement;
    this.buttonForm = ensureElement('.todo-form__submit-btn', this.container) as HTMLButtonElement;

    this.container.addEventListener('submit', (event) => {
      event.preventDefault();
      events.emit('form:submit', {value: this.inputForm.value});
    })
  }

  set value(value: string) {
    this.inputForm.value = value;
  }

  set buttonText(text: string) {
    this.setText(this.buttonForm, text);
  }

  reset() {
    this.inputForm.value = '';
  }
}