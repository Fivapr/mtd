import React, { Component } from "react";
import { ItemTypes } from "./Constants";
import { DragSource } from "react-dnd";

const todoSource = {
  beginDrag(props) {
    return { index: props.index };
  }
};

function collect(connect) {
  return {
    connectDragSource: connect.dragSource()
  };
}

class DragElement extends Component {
  render() {
    const { value, connectDragSource } = this.props;
    return connectDragSource(<div>{value} </div>);
  }
}

export default DragSource(ItemTypes.TODO, todoSource, collect)(DragElement);
