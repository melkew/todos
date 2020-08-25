import React from 'react';
import Header from "./Header";
import TodoItem from "./TodoItem/TodoItem";
import InputTodo from "./InputTodo";
import { v4 as uuidv4 } from 'uuid';
import axios from "axios";



// class component
class TodoContainer extends React.Component {

    state = {
        todos: []
    }

    componentDidMount() {
        console.log('Komponente ist fertig (componentDidMount)');
        axios.get('https://meladtodo.herokuapp.com/todos')
            .then(
                response => {this.setState({ todos : response.data} ) } 
            );
        
        // Aufgabe
        // füge die Todo von jsonplaceholder deinem state und somit deiner ToDo-Listhinzu
    }

    componentDidUpdate() {
        console.log('component did update!')
    }

    onChangeCheckbox = (id) => {

        axios.put(`https://meladtodo.herokuapp.com/todos/${id}`)
        const updatedTodosArr = this.state.todos.map(todo => {
            if(todo._id === id) {
                todo.completed = !todo.completed;
            }
            return todo;
        })

        // console.log(updatedTodosArr);

        this.setState( {
            todos: updatedTodosArr
        } );
    }

    deleteTodoHandler = (id) => {
        console.log('delete item:', id);
        axios.delete(`https://meladtodo.herokuapp.com/todos/${id}`)

        const updatedTodosArr = this.state.todos.filter( todo => todo._id !== id );
        console.log(updatedTodosArr); // Ziel: Array ohne das gelöschte Element

        //update state

        this.setState({
            todos: updatedTodosArr
        })
    }

    addTodoItem = (title) => {
        console.log('add:', title)
        axios.post(`https://meladtodo.herokuapp.com/todos`, { title })
        // füge neues toDo Item dem state hinzu
        // drei Werte: id, title, completed
        const newTodo = {
            id: uuidv4(),
            title: title,
            completed: false
        }

        // copy array from state to updatedTodosArr
        const updatedTodosArr = [...this.state.todos];
        // add new todo Item to updatedTodosArr on first position
        updatedTodosArr.unshift(newTodo);

        //update state with updatedTodosArr
        this.setState({
            todos: updatedTodosArr
        });
        console.log(updatedTodosArr);
    }
    

    render() {

        console.log('Komponente render wird aufgerufen')
        return (
            <div className="container">
                <Header />
                <InputTodo 
                    addTodoItem ={this.addTodoItem}
                />
                <ul>
                    {
                        this.state.todos.map(todo => (
                            <TodoItem
                                key={todo._id}
                                id={todo._id}
                                title={todo.title}
                                completed={todo.completed}
                                handleChange={this.onChangeCheckbox} 
                                deleteTodoHandler={this.deleteTodoHandler}
                            />
                        ))
                    }
                </ul>
            </div>
        );
    }
}

// functional component
const TodoContainerFunction = (props) => {

    return (
        <div>
            <h1>Hi, ich bin der TodoContainer!</h1>
            <p>{props.text}</p>
        </div>);
};
void TodoContainerFunction; // Tue nichts -> vermeidet warning

export default TodoContainer;
