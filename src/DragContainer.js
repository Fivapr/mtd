import React, { Component } from "react";
import { ItemTypes } from "./Constants";
import { DropTarget } from "react-dnd";
import DragElement from "./DragElement";

const divTarget = {
  drop(props, monitor) {
    props.handleDrag(monitor.getItem().index, props.index);
  }
};

function collect(connect) {
  return {
    connectDropTarget: connect.dropTarget()
  };
}

class DragContainer extends Component {
  handleClick = index => {
    this.props.deleteToDo(index);
  };

  render() {
    const { index, value, connectDropTarget } = this.props;

    return connectDropTarget(
      <div
        style={{
          backgroundColor: "red",
          width: 400,
          height: 50,
          display: "flex",
          justifyContent: "space-between"
        }}
      >
        <DragElement value={value} index={index} />
        <span
          style={{ cursor: "pointer" }}
          onClick={() => this.handleClick(index)}
        >
          X
        </span>
      </div>
    );
  }
}

export default DropTarget(ItemTypes.TODO, divTarget, collect)(DragContainer);
