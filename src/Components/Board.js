import React, { Component } from "react";
import DragContainer from "./DragContainer";
import AddToDo from "./AddToDo";
import styled from "styled-components";

const BoardHeader = styled.div`
  width: 200px;
  display: flex;
  justify-content: space-between;
`;

const Delete = styled.h2`
  cursor: pointer;
`;

const BoardName = styled.h2``;

class Board extends Component {
  render() {
    const {
      deleteBoard,
      addToDo,
      boardIndex,
      handleDrag,
      addBoard,
      deleteToDo,
      todos,
      name
    } = this.props;

    return (
      <div>
        <BoardHeader>
          <BoardName>{name}</BoardName>
          <Delete onClick={() => deleteBoard(boardIndex)}>X</Delete>
        </BoardHeader>

        <AddToDo addToDo={addToDo} boardIndex={boardIndex} />

        {todos.map((todo, index) => {
          return (
            <DragContainer
              todo={todo}
              boardIndex={boardIndex}
              index={index}
              key={index}
              handleDrag={handleDrag}
              deleteToDo={deleteToDo}
              addBoard={addBoard}
            />
          );
        })}
      </div>
    );
  }
}

export default Board;
