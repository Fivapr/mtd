import React, { Component } from "react";
import "./App.css";
import { DragDropContext } from "react-dnd";
import HTML5Backend from "react-dnd-html5-backend";
import DragContainer from "./DragContainer";
import AddToDo from "./AddToDo";

//"lala", "qwerty", "ququarequu"

class App extends Component {
  constructor() {
    super();
    this.state = {
      todos: []
    };
  }

  getTodosfromLS = () => {
    if (localStorage.getItem("todos")) {
      this.state.todos = JSON.parse(localStorage.getItem("todos"));
      this.setState({
        todos: this.state.todos
      });
    }
  };

  setTodosToLS = todos => {
    localStorage.setItem("todos", JSON.stringify(this.state.todos));
  };

  componentDidMount() {
    this.getTodosfromLS();
  }

  swap = (arr, i, j) => {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
    return arr;
  };

  handleDrag = (indexTo, indexFrom) => {
    this.setState({
      todos: this.swap(this.state.todos, indexFrom, indexTo)
    });
    this.setTodosToLS(this.state.todos);
  };

  addToDo = todo => {
    this.state.todos.push(todo);
    this.setState({
      todos: this.state.todos
    });
    this.setTodosToLS(this.state.todos);
  };

  deleteToDo = index => {
    this.state.todos.splice(index, 1);
    this.setState({
      todos: this.state.todos
    });
    this.setTodosToLS(this.state.todos);
  };

  render() {
    return (
      <div>
        <AddToDo addToDo={this.addToDo} />
        {this.state.todos.map((todo, index) => {
          return (
            <DragContainer
              value={todo}
              index={index}
              key={index}
              handleDrag={this.handleDrag}
              deleteToDo={this.deleteToDo}
            />
          );
        })}
      </div>
    );
  }
}

export default DragDropContext(HTML5Backend)(App);
