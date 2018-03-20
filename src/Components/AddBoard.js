import React, { Component } from "react";
import styled from "styled-components";

const AddContainer = styled.div`
  margin: 20px;
  padding: 5px 10px;
  background: white;
  box-shadow: 0 6px 6px rgba(0, 0, 0, 0.16), 0 6px 6px rgba(0, 0, 0, 0.23);
`;

const Input = styled.input.attrs({
  type: "text",
  placeholder: "Add new list"
})`
  background: white;
  margin: 10px 0;
  padding: 14px 7px;
  border-radius: 4.5px;
  box-shadow: 0 6px 6px rgba(0, 0, 0, 0.16), 0 6px 6px rgba(0, 0, 0, 0.23);
  textdecoration: "none";
  font-size: 1em;
  border: 0 solid palevioletred;
`;

class AddBoard extends Component {
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
    this.props.addBoard(this.state.value);
  };

  render() {
    return (
      <AddContainer>
        <form onSubmit={this.onSubmit}>
          <Input onChange={this.onChange} />
        </form>
      </AddContainer>
    );
  }
}

export default AddBoard;
