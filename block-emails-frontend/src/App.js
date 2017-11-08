import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <div className="toolbar">
          <a href="/auth/google">Login</a>
        </div>
        <div className="container">
          <div className="header">
            <h1>Gmail Blocker</h1>
            <p>Permanently Block Unwanted Emails</p>
            <button>Sign Up Now</button>
          </div>
        </div>
        <div className="container">
          <div className="details">
            <h2>Why use this?</h2>
            <p>
              Gmail currently offers a way to automatically move certain emails
              to the Trash or Spam. This isn't good enough if you are tempted to
              check those folders. This service will instantly and permanently
              delete emails from certain email addresses.
            </p>
            <h2>Sooo... like when would I use this?</h2>
            <p>
              Ever blocked an ex and kept checking your Trash or Spam in Gmail?
              This will make sure that any messages they send you will be
              instantly gone forever. Temptation removed :)
            </p>
          </div>
        </div>
        <div className="footer">
          <p>&copy; {new Date().getFullYear()} Golightly+</p>
          <p>
            <a href="https://golightlyplus.com/contact/">Contact</a>
          </p>
        </div>
      </div>
    );
  }
}

export default App;
