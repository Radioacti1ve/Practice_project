import { ToDoModel } from "./components/ToDoModels";
import { todos } from "./utils/constants";
import "./styles/styles.css";

const toDoModel = new ToDoModel();
toDoModel.setItems(todos);
console.log(toDoModel);
