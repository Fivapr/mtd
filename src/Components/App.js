import React, { Component } from "react";
import { DragDropContext } from "react-dnd";
import HTML5Backend from "react-dnd-html5-backend";
import AddBoard from "./AddBoard";
import Board from "./Board";

// { name: "qwe", todos: ["lala", "qwerty", "ququarequu"] },
// { name: "rty", todos: ["lolalo", "asdfgh", "ququarequu"] }
class App extends Component {
  constructor() {
    super();
    this.state = {
      boards: []
    };
  }

  getTodosfromLS = () => {
    if (localStorage.getItem("boards")) {
      this.state.boards = JSON.parse(localStorage.getItem("boards"));
      this.setState({ boards: this.state.boards });
    }
  };

  setTodosToLS = () => {
    localStorage.setItem("boards", JSON.stringify(this.state.boards));
  };

  componentDidMount() {
    this.getTodosfromLS();
  }

  swap = (arri, arrj, i, j) => {
    let temp = arri[i];
    arri[i] = arrj[j];
    arrj[j] = temp;
  };

  handleDrag = (boardIndexFrom, indexFrom, boardIndexTo, indexTo) => {
    this.swap(
      this.state.boards[boardIndexFrom].todos,
      this.state.boards[boardIndexTo].todos,
      indexFrom,
      indexTo
    );
    this.setState({ boards: this.state.boards });
    this.setTodosToLS();
  };

  addToDo = (boardIndex, todo) => {
    this.state.boards[boardIndex].todos.push(todo);
    this.setState({ boards: this.state.boards });
    this.setTodosToLS();
  };

  deleteToDo = (boardIndex, index) => {
    this.state.boards[boardIndex].todos.splice(index, 1);
    this.setState({});
    this.setTodosToLS();
  };

  deleteBoard = boardIndex => {
    this.state.boards.splice(boardIndex, 1);
    this.setState({ boards: this.state.boards });
    this.setTodosToLS();
  };

  addBoard = name => {
    this.state.boards.push({ name: name, todos: [] });
    this.setState({ boards: this.state.boards });
    this.setTodosToLS();
  };

  render() {
    return (
      <div>
        <AddBoard addBoard={this.addBoard} />
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
              deleteBoard={this.deleteBoard}
            />
          );
        })}
      </div>
    );
  }
}

export default DragDropContext(HTML5Backend)(App);
