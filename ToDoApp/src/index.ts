import "./styles/styles.css";
import { ToDoApi } from "./components/ToDoApi";
import { EventEmitter } from "./components/base/Events";
import { ToDoModel } from "./components/ToDoModels";
import { Page } from "./components/Page";
import { cloneTemplate } from "./utils/utils";
import { Item } from "./components/Item";
import { Form } from "./components/Form";

const events = new EventEmitter();

const toDoModel = new ToDoModel(events);

const api = new ToDoApi('https://jsonplaceholder.typicode.com');

const itemTemplate = document.querySelector('#todo-item-template') as HTMLTemplateElement;

const page = new Page(document.querySelector('.page__content') as HTMLElement);

const form = new Form(document.querySelector('.todos__form') as HTMLElement, events);

api.getTasks()
  .then(data => {
    toDoModel.setItems(data);
  })
  .catch(err => {
    console.log(err);
  })


events.on('items:changed', () => {
  const itemsHTMLArray = toDoModel.getItems().map(item => new Item(cloneTemplate(itemTemplate), events).render(item)); 

  page.render( {
    toDoList: itemsHTMLArray,
    taskTotal: toDoModel.getTotal(),
    taskDone: toDoModel.getDone(),
  })
})

events.on('item:checked', ({id}: {id: number}) => {
  toDoModel.checkItem(id);
})

events.on('item:delete', ({id}: {id: number}) => {
  toDoModel.deleteItem(id);
})

events.on('item:copy', ({id}: {id: number}) => {
  const item = toDoModel.getItem(id);
  toDoModel.addItem(item);
})

events.on('form:submit', ({value}: {value:string}) =>{
  api.addTask({title: value, completed: false})
    .then(item => {
      toDoModel.addItem(item);
      form.reset();
    })
    .catch(err => console.log(err));
})