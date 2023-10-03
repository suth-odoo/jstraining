/** @odoo-module **/
import {Component,useState } from "@odoo/owl";
import { Todo } from "../todo/todo";
import { useAutofocus} from  "./utils";

export class TodoList extends Component {
    static template ='owl_playground.TodoList';
    setup() {
        
        // this.todoList = [
        // { id : 3, description: "buy milk", done: false},
        // { id : 4, description :"buy eggs", done: true},
        // { id : 5, description :"buy avacado", done: true},
    // ];
    this.nextId = 0;
    this.todoList = useState([]);
    useAutofocus("TodoListInput");

    }
    addTodo(ev){
    if (ev.keyCode === 13 && ev.target.value != ""){
        this.todoList.push({id : this.nextId++ , description:ev.target.value , done:false});
        ev.target.value= "";

    }
    }
    

    toggleTodo(todoId){
        const todo = this.todoList.find((todo) => todo.id === todoId);
        if (todo) {
            todo.done = !todo.done;
        }
    }
    toggleRemove(todoId){
        const index = list.findIndex((todo) => todo.id === todoId);
        if (index >= 0) {
            this.todoList.splice(index, 1);
        }
    }
    
    static components={Todo};
}

