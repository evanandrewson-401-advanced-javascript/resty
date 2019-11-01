import React, { Component } from 'react';
import goFetch from '../services/fetch';

export default class MainContainer extends Component {

  state = {
    url: 'url',
    jsonBody: 'Raw JSON Body',
    username: 'Username',
    password: 'Password',
    bearerToken: 'Bearer Token',
    method: ''
  }

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  }

  updateMethod = () => {
    this.setState({ method: 'hello' });
  }

  render() {
    return (
      <form>
        <input type="string" name="url" value={this.state.url} onChange={this.handleChange}></input>
        <section>
          <button name="get" onClick={this.updateMethod}>GET</button>
          <button name="post" onClick={this.updateMethod}>POST</button>
          <button name="put" onClick={this.updateMethod}>PUT</button>
          <button name="patch" onClick={this.updateMethod}>PATCH</button>
          <button name="delete" onClick={this.updateMethod}>DELETE</button>
          <button onSubmit={() => goFetch(this.state.url, this.state.method, this.state.jsonBody)}>Go!</button>
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