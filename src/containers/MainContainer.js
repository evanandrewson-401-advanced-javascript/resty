import React, { Component, useState, useReducer } from 'react';
import goFetch from '../services/fetch';
import Display from '../components/Display';
import History from '../components/History';
import styles from './MainContainer.css';

const formReducer = (state, action) => {
  switch(action.type) {
    case 'url':
      return {...state, url: action.payload};
    case 'jsonBody':
      return {...state, jsonBody: action.payload};
    case 'username':
      return {...state, username: action.payload};
    case 'password':
      return {...state, password: action.payload};
    default:
      return state;
  }
}

const MainContainer = () => {
  // const [url, updateUrl] = useState('url');
  // const [jsonBody, updateJsonBody] = useState('Raw JSON Body');
  // const [username, updateUsername] = useState('Username');
  // const [password, updatePassword] = useState('Password');
  const [method, updateMethod] = useState('');
  const [display, updateDisplay] = useState('');
  const [history, updateHistory] = useState([]);
  const [disabled, updateDisabled] = useState(false);
  const [formData, dispatchFormData] = useReducer(formReducer, { url: 'url', jsonBody: 'Raw JSON Body', username: 'Username', password: 'Password'});

  const handleChange = ({ target }) => {
    dispatchFormData({ type: target.name, payload: target.value });
  }
  
  const updateAndDisable = ({ target }) => {
    this.setState({ method: target.name, disabled: true })
  }

  const updateAndReenable = ({ target }) => {
    this.setState({ method: target.name, disabled: false })
  }

  const handleSubmit = (e) => {
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

  return (
    <div className={styles.MainContainer}>
      <div className={styles.history}>
        <h1>History</h1>
        {history && <History items={history} />}
      </div>
      <form onSubmit={handleSubmit}>
        <input className={styles.URLinput} type="string" name="url" value={formData.url} onChange={handleChange}></input>
        <section>
          <button className={styles.regularButton} type="button" name="get" onClick={updateAndDisable}>GET</button>
          <button className={styles.regularButton} type="button" name="post" onClick={updateAndReenable}>POST</button>
          <button className={styles.regularButton} type="button" name="put" onClick={updateAndReenable}>PUT</button>
          <button className={styles.regularButton} type="button" name="patch" onClick={updateAndReenable}>PATCH</button>
          <button className={styles.regularButton} type="button" name="delete" onClick={updateAndDisable}>DELETE</button>
          <button className={styles.goButton}>Go!</button>
        </section>
        <div className={styles.flex}>
          <input type="string" name="jsonBody" className={styles.jsonBody} disabled={disabled} value={formData.jsonBody} onChange={handleChange}></input>
          <section className={styles.authSection}>
            <button className={styles.headerButton}>Headers</button>
            <p>Basic Authorization</p>  
            <input type="string" name="username" value={formData.username} onChange={handleChange}></input>
            <input type="string" name="password" value={formData.password} onChange={handleChange}></input>
            <p>Bearer Token</p>
            <input type="string" name="bearerToken" className={styles.bearerToken} value={formData.bearerToken} onChange={handleChange}></input>
          </section>
        </div>
        {display && <Display data={display} />}
      </form>
    </div>
  )
}

export default MainContainer;

// export default class MainContainer extends Component {

//   state = {
//     url: 'url',
//     jsonBody: 'Raw JSON Body',
//     username: 'Username',
//     password: 'Password',
//     bearerToken: 'Bearer Token',
//     method: '',
//     display: 'hello',
//     history: [],
//     disabled: false
//   }

//   handleChange = ({ target }) => {
//     this.setState({ [target.name]: target.value });
//   }
  
//   updateAndDisable = ({ target }) => {
//     this.setState({ method: target.name, disabled: true })
//   }

//   updateAndReenable = ({ target }) => {
//     this.setState({ method: target.name, disabled: false })
//   }

//   handleSubmit = (e) => {
//     e.preventDefault();
//     goFetch(this.state.url, this.state.method, this.state.jsonBody)
//       .then(result => this.setState(state => {
//     return {
//       display: JSON.stringify(result, null, "\t"),
//       history: state.history.concat({
//         method: this.state.method,
//         url: this.state.url
//       })
//     }
//   }))
//   }

//   render() {
//     return (
//       <div className={styles.MainContainer}>
//         <div className={styles.history}>
//           <h1>History</h1>
//           {this.state.history && <History items={this.state.history} />}
//         </div>
//         <form onSubmit={this.handleSubmit}>
//           <input className={styles.URLinput} type="string" name="url" value={this.state.url} onChange={this.handleChange}></input>
//           <section>
//             <button className={styles.regularButton} type="button" name="get" onClick={this.updateAndDisable}>GET</button>
//             <button className={styles.regularButton} type="button" name="post" onClick={this.updateAndReenable}>POST</button>
//             <button className={styles.regularButton} type="button" name="put" onClick={this.updateAndReenable}>PUT</button>
//             <button className={styles.regularButton} type="button" name="patch" onClick={this.updateAndReenable}>PATCH</button>
//             <button className={styles.regularButton} type="button" name="delete" onClick={this.updateAndDisable}>DELETE</button>
//             <button className={styles.goButton}>Go!</button>
//           </section>
//           <div className={styles.flex}>
//             <input type="string" name="jsonBody" className={styles.jsonBody} disabled={this.state.disabled} value={this.state.jsonBody} onChange={this.handleChange}></input>
//             <section className={styles.authSection}>
//               <button className={styles.headerButton}>Headers</button>
//               <p>Basic Authorization</p>
//               <input type="string" name="username" value={this.state.username} onChange={this.handleChange}></input>
//               <input type="string" name="password" value={this.state.password} onChange={this.handleChange}></input>
//               <p>Bearer Token</p>
//               <input type="string" name="bearerToken" className={styles.bearerToken} value={this.state.bearerToken} onChange={this.handleChange}></input>
//             </section>
//           </div>
//           {this.state.display && <Display data={this.state.display} />}
//         </form>
//       </div>
//     )
//   }
// }
