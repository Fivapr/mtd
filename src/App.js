import React, { Component } from "react";
import "./App.css";
import { DragDropContext } from "react-dnd";
import HTML5Backend from "react-dnd-html5-backend";
import DragContainer from "./DragContainer";
import AddToDo from "./AddToDo";
import Board from "./Board";

//"lala", "qwerty", "ququarequu"

class App extends Component {
  constructor() {
    super();
    this.state = {
      boards: [
        { name: "qwe", todos: ["lala", "qwerty", "ququarequu"] },
        { name: "rty", todos: ["lolalo", "asdfgh", "ququarequu"] }
      ]
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

  handleDrag = (boardIndexFrom, indexFrom, boardIndexTo, indexTo) => {
    this.state.boards[boardIndexFrom].todos = this.swap(
      this.state.boards[boardIndexFrom].todos,
      indexFrom,
      indexTo
    );

    this.setState({
      boards: this.state.boards
    });
  };

  addToDo = (boardIndex, todo) => {
    this.state.boards[boardIndex].todos.push(todo);
    this.setState({
      boards: this.state.boards
    });
  };

  deleteToDo = (boardIndex, index) => {
    this.state.boards[boardIndex].todos.splice(index, 1);
    this.setState({
      todos: this.state.todos
    });
  };

  render() {
    return (
      <div>
        {this.state.boards.map((board, index) => {
          return (
            <Board
              boardIndex={index}
              key={index}
              name={board.name}
              todos={board.todos}
              handleDrag={this.handleDrag}
              deleteToDo={this.deleteToDo}
              addToDo={this.addToDo}
            />
          );
        })}
      </div>
    );
  }
}

export default DragDropContext(HTML5Backend)(App);
