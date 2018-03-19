import React, { Component } from "react";
import DragContainer from "./DragContainer";
import AddToDo from "./AddToDo";

class Board extends Component {
  handleClick = boardIndex => {
    this.props.deleteBoard(boardIndex);
  };

  render() {
    return (
      <div>
        <div
          style={{
            width: 200,
            display: "flex",
            justifyContent: "space-between"
          }}
        >
          <h2>{this.props.name}</h2>
          <h2
            style={{ cursor: "pointer" }}
            onClick={() => this.handleClick(this.props.boardIndex)}
          >
            X
          </h2>
        </div>
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
              addBoard={this.props.addBoard}
            />
          );
        })}
      </div>
    );
  }
}

export default Board;
