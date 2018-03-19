import React, { Component } from "react";

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
    this.props.addToDo(this.state.value);
  };

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <input onChange={this.onChange} />
        </form>
      </div>
    );
  }
}

export default AddToDo;
