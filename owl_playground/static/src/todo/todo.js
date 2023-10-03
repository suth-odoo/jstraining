/** @odoo-module **/

import {Component } from "@odoo/owl";
export class Todo extends Component 

{
    onClick (ev){
        this.props.toggleState(this.props.id);
    }
    onRemove (ev){
        this.props.removeTodo(this.props.id);
    }
    static template='owl_playground.Todo'; 
    static props ={
        id :{type :Number},
        description :{type : String},
        done : {type : Boolean},
        toggleState : {type :Function},
        removeTodo : {type :Function},

    };
}
