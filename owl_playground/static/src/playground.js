/** @odoo-module **/

import { Component} from "@odoo/owl";
import { Counter} from "./counter/counter";
// import { Todo } from "./todo/todo";
import { TodoList } from "./TodoList/TodoList";
import { Card } from "./card/card"
 


export class Playground extends Component {
    static template = "owl_playground.playground";
    
    // setup() {
    //     // this.state = useState({ value: 0 });
    //     this.todo = { id: 3, description: "buy milk", done: false};
       
    // }

    // increment() {
    //     this.state.value++;
    // }
    // static components ={ Counter,Todo };
    static components = { Counter , TodoList , Card}
 
}