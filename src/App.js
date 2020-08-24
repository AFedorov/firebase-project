import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import * as firebase from 'firebase'

export default class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: '',
    }
  }

  componentDidMount() {
    const db = firebase.database()
    console.log(db)
  }

  handleChange = ({ target: { value, id } }) => {
    console.log(value, id)
  }

  render() {
    return (
      <div>
        <div className="login_block">
          <input
            type="text"
            id="email"
            placeholder="email"
            onChange={this.handleChange}
          />
          <input
            type="password"
            id="password"
            placeholder="password"
            onChange={this.handleChange}
          />
          <input type="submit" />
        </div>
      </div>
    )
  }
}