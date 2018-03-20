import React, { Component } from "react";
import { DragDropContext } from "react-dnd";
import HTML5Backend from "react-dnd-html5-backend";
import AddBoard from "./AddBoard";
import Board from "./Board";
import styled from "styled-components";

// { name: "qwe", todos: ["lala", "qwerty", "ququarequu"] },
// { name: "rty", todos: ["lolalo", "asdfgh", "ququarequu"] }

const BoardContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
`;

class App extends Component {
  constructor() {
    super();
    this.state = {
      boards: []
    };
  }

  getDatafromLS = () => {
    if (localStorage.getItem("boards")) {
      this.state.boards = JSON.parse(localStorage.getItem("boards"));
      this.setState({});
    }
  };

  setDataToLS = () => {
    localStorage.setItem("boards", JSON.stringify(this.state.boards));
  };

  componentDidMount() {
    this.getDatafromLS();
  }

  swap = (arri, arrj, i, j) => {
    let temp = arri.splice(i, 1);
    arrj.splice(j, 0, temp);
  };

  handleDrag = (boardIndexFrom, indexFrom, boardIndexTo, indexTo) => {
    this.swap(
      this.state.boards[boardIndexFrom].todos,
      this.state.boards[boardIndexTo].todos,
      indexFrom,
      indexTo
    );
    this.setState({}, () => this.setDataToLS());
  };

  addToDo = (boardIndex, todo) => {
    this.state.boards[boardIndex].todos.push(todo);
    this.setState({}, () => this.setDataToLS());
  };

  deleteToDo = (boardIndex, index) => {
    this.state.boards[boardIndex].todos.splice(index, 1);
    this.setState({}, () => this.setDataToLS());
  };

  deleteBoard = boardIndex => {
    this.state.boards.splice(boardIndex, 1);
    this.setState({}, () => this.setDataToLS());
  };

  addBoard = name => {
    this.state.boards.push({ name: name, todos: [] });
    this.setState({}, () => this.setDataToLS());
  };

  render() {
    return (
      <div>
        <BoardContainer>
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
          <AddBoard addBoard={this.addBoard} />
        </BoardContainer>
      </div>
    );
  }
}

export default DragDropContext(HTML5Backend)(App);
