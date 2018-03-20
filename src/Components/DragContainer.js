import React, { Component } from "react";
import { ItemTypes } from "./Constants";
import { DropTarget } from "react-dnd";
import DragElement from "./DragElement";
import styled from "styled-components";

const Container = styled.div`
  background: #caffde;
  margin: 20px 0;
  padding: 14px 7px;
  border-radius: 4.5px;
  cursor: grab;
  display: flex;
  justify-content: space-between;
  box-shadow: 0 6px 6px rgba(0, 0, 0, 0.16), 0 6px 6px rgba(0, 0, 0, 0.23);
  textdecoration: "none";
`;

const Delete = styled.span`
  cursor: pointer;
  margin-left: 20px;
`;

const divTarget = {
  drop(props, monitor) {
    props.handleDrag(
      monitor.getItem().boardIndex,
      monitor.getItem().index,
      props.boardIndex,
      props.index
    );
  }
};

function collect(connect) {
  return {
    connectDropTarget: connect.dropTarget()
  };
}

class DragContainer extends Component {
  render() {
    const {
      boardIndex,
      index,
      todo,
      connectDropTarget,
      deleteToDo
    } = this.props;

    return connectDropTarget(
      <div>
        <Container>
          <DragElement todo={todo} index={index} boardIndex={boardIndex} />
          <Delete onClick={() => deleteToDo(boardIndex, index)}>X</Delete>
        </Container>
      </div>
    );
  }
}

export default DropTarget(ItemTypes.TODO, divTarget, collect)(DragContainer);
