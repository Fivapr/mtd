import React, { Component } from "react";
import styled from "styled-components";

const AddContainer = styled.div``;

const Input = styled.input.attrs({
  type: "text"
})`
  background: white;
  margin: 10px 0;
  padding: 14px 7px;
  border-radius: 4.5px;
  box-shadow: 0 6px 6px rgba(0, 0, 0, 0.16), 0 6px 6px rgba(0, 0, 0, 0.23);
  textdecoration: "none";
  font-size: 1em;
  border: 2px solid palevioletred;
`;

class AddToDo extends Component {
  constructor() {
    super();
    this.state = {
      value: ""
    };
  }

  onChange = e => {
    this.setState({
      value: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();
    this.props.addToDo(this.props.boardIndex, this.state.value);
  };

  render() {
    return (
      <AddContainer>
        <form onSubmit={this.onSubmit} style={{ display: "flex", flex: 1 }}>
          <Input onChange={this.onChange} style={{ flex: 1, border: 0 }} />
        </form>
      </AddContainer>
    );
  }
}

export default AddToDo;
