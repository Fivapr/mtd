import React, { Component } from "react";
import DragContainer from "./DragContainer";
import AddToDo from "./AddToDo";

class Board extends Component {
  addToDo = (boardIndex, todo) => {
    this.props.addToDO(boardIndex, todo);
  };

  deleteToDo = (boardIndex, index) => {
    this.props.deleteToDo(boardIndex, index);
  };

  handleDrag = (boardIndexFrom, indexFrom, boardIndexTo, indexTo) => {
    this.props.handleDrag(boardIndexFrom, indexFrom, boardIndexTo, indexTo);
  };

  render() {
    return (
      <div>
        <h2>{this.props.name}</h2>
        <AddToDo
          addToDo={this.props.addToDo}
          boardIndex={this.props.boardIndex}
        />
        {this.props.todos.map((todo, index) => {
          return (
            <DragContainer
              value={todo}
              boardIndex={this.props.boardIndex}
              index={index}
              key={index}
              handleDrag={this.props.handleDrag}
              deleteToDo={this.props.deleteToDo}
            />
          );
        })}
      </div>
    );
  }
}

export default Board;
