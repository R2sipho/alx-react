import React, { Component } from 'react'
import logo from './logo.jpg'
import { getFullYear, getFooterCopy } from './utils'

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedInput: '',
    };
  }

  handleLabelClick = (inputName) => {
    this.setState({ selectedInput: inputName });
  }

  render() {
    const { selectedInput } = this.state;

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>School dashboard</h1>
        </header>
        <body className="App-body">
          <p>Login to access the full dashboard</p>
          <div className="login-form">
            <label htmlFor="email" onClick={() => this.handleLabelClick('email')}>
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className={selectedInput === 'email' ? 'selected' : ''}
            />
            <label htmlFor="password" onClick={() => this.handleLabelClick('password')}>
              Password:
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className={selectedInput === 'password' ? 'selected' : ''}
            />
          </div>
          <button type="button">OK</button>
        </body>
        <footer className="App-footer">
          <p>Copyright {getFullYear()} - {getFooterCopy(true)}</p>
        </footer>
      </div>
    );
  }
}
