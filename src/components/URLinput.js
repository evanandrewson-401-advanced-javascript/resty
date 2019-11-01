import React, { Component } from 'react';

class URLinput extends Component {
  state = {
    url: 'url'
  }

  handleChange = ({ target }) => {
    this.setState({[target.name]: target.value });
  }

  render() {
    return (<input type="string" name="url" value={this.state.url} onChange={this.handleChange}></input>)
  }
}

export default URLinput;

