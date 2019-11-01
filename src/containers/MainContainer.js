import React, { Component } from 'react';
import goFetch from '../services/fetch';

// goFetch(this.state.url, this.state.method, this.state.jsonBody)

export default class MainContainer extends Component {

  state = {
    url: 'url',
    jsonBody: 'Raw JSON Body',
    username: 'Username',
    password: 'Password',
    bearerToken: 'Bearer Token',
    method: 'GET'
  }

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  }

  updateMethod = ({ target }) => {
    this.setState({ method: target.name });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    goFetch(this.state.url, this.state.method, this.state.jsonBody)
      .then(result => console.log(result));
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="string" name="url" value={this.state.url} onChange={this.handleChange}></input>
        <section>
          <button type="button" name="get" onClick={this.updateMethod}>GET</button>
          <button type="button" name="post" onClick={this.updateMethod}>POST</button>
          <button type="button" name="put" onClick={this.updateMethod}>PUT</button>
          <button type="button" name="patch" onClick={this.updateMethod}>PATCH</button>
          <button type="button" name="delete" onClick={this.updateMethod}>DELETE</button>
          <button >Go!</button>
        </section>
        <input type="string" name="jsonBody" value={this.state.jsonBody} onChange={this.handleChange}></input>
        <section>
          <button>Headers</button>
          <p>Basic Authorization</p>
          <input type="string" name="username" value={this.state.username} onChange={this.handleChange}></input>
          <input type="string" name="password" value={this.state.password} onChange={this.handleChange}></input>
          <p>Bearer Token</p>
          <input type="string" name="bearerToken" value={this.state.bearerToken} onChange={this.handleChange}></input>
        </section>
      </form>
    )
  }
}