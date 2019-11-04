import React, { Component } from 'react';
import goFetch from '../services/fetch';
import Display from '../components/Display';
import History from '../components/History';
import styles from './MainContainer.css';

export default class MainContainer extends Component {

  state = {
    url: 'url',
    jsonBody: 'Raw JSON Body',
    username: 'Username',
    password: 'Password',
    bearerToken: 'Bearer Token',
    method: '',
    display: '{}',
    history: [],
    disabled: false

  }

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
    this.className.add(styles.selected);
  }

  // updateMethod = ({ target }) => {
  //   this.setState({ method: target.name });
  // }
  
  updateAndDisable = ({ target }) => {
    this.setState({ method: target.name, disabled: true })
  }

  updateAndReenable = ({ target }) => {
    this.setState({ method: target.name, disabled: false })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    goFetch(this.state.url, this.state.method, this.state.jsonBody)
      .then(result => this.setState(state => {
    return {
      display: JSON.stringify(result, null, "\t"),
      history: state.history.concat({
        method: this.state.method,
        url: this.state.url
      })
    }
  }))
  }

  render() {
    return (
      <div className={styles.MainContainer}>
        <div className={styles.history}>
          <h1>History</h1>
          {this.state.history && <History items={this.state.history} />}
        </div>
        <form onSubmit={this.handleSubmit}>
          <input className={styles.URLinput} type="string" name="url" value={this.state.url} onChange={this.handleChange}></input>
          <section>
            <button className={styles.regularButton} type="button" name="get" onClick={this.updateAndDisable}>GET</button>
            <button className={styles.regularButton} type="button" name="post" onClick={this.updateAndReenable}>POST</button>
            <button className={styles.regularButton} type="button" name="put" onClick={this.updateAndReenable}>PUT</button>
            <button className={styles.regularButton} type="button" name="patch" onClick={this.updateAndReenable}>PATCH</button>
            <button className={styles.regularButton} type="button" name="delete" onClick={this.updateAndDisable}>DELETE</button>
            <button className={styles.goButton}>Go!</button>
          </section>
          <div className={styles.flex}>
            <input type="string" name="jsonBody" disabled={this.state.disabled} value={this.state.jsonBody} onChange={this.handleChange}></input>
            <section>
              <button>Headers</button>
              <p>Basic Authorization</p>
              <input type="string" name="username" value={this.state.username} onChange={this.handleChange}></input>
              <input type="string" name="password" value={this.state.password} onChange={this.handleChange}></input>
              <p>Bearer Token</p>
              <input type="string" name="bearerToken" value={this.state.bearerToken} onChange={this.handleChange}></input>
            </section>
          </div>
          <Display data={this.state.display} />
        </form>
      </div>
    )
  }
}
