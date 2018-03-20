import React, { Component } from "react";
import DragContainer from "./DragContainer";
import AddToDo from "./AddToDo";
import styled from "styled-components";

const BoardHeader = styled.div`
  min-width: 200px;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid rgba(0, 0, 0, 0.25);
`;

const Delete = styled.h4`
  cursor: pointer;
  margin-left: 20px;
`;

const BoardName = styled.h4`
  color: #333;
  text-align: center;
  text-transform: uppercase;
  margin: 20 0;
`;

const BoardContainer = styled.div`
  margin: 20px;
  padding: 5px 10px;
  background: white;
  box-shadow: 0 6px 6px rgba(0, 0, 0, 0.16), 0 6px 6px rgba(0, 0, 0, 0.23);
`;

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
      <BoardContainer>
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
      </BoardContainer>
    );
  }
}

export default Board;
