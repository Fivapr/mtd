import React, { Component } from "react";

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
      <div>
        <form onSubmit={this.onSubmit}>
          <input onChange={this.onChange} />
        </form>
      </div>
    );
  }
}

export default AddBoard;
