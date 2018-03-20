import React, { Component } from "react";
import { ItemTypes } from "./Constants";
import { DropTarget } from "react-dnd";
import DragElement from "./DragElement";
import styled from "styled-components";

const Container = styled.div`
  background: red;
  width: 400px;
  height: 50px;
  line-height: 50px;
  display: flex;
  justify-content: space-between;
`;

const Delete = styled.span`
  cursor: pointer;
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
