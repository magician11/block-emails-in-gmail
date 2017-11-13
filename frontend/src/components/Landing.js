import React from 'react';

import '../styling/landing.css';

const Landing = () => {
  return (
    <div className="landing">
      <div className="row">
        <div className="col s12 m8 offset-m2">
          <h1>Gmail Blocker</h1>
          <h4>Automatically & Permanently Delete Unwanted Emails</h4>
          <a
            className="btn-large purple darken-4 hoverable"
            href="/auth/google"
          >
            Login with your Google Account
          </a>
        </div>
      </div>
      <div className="row">
        <div className="col s12 m8 offset-m2">
          <h2>Why use this?</h2>
          <p className="flow-text">
            Currently, Gmail offers a way to filter certain emails to the Trash
            or Spam. This isn't good enough if you are tempted to check those
            folders, as emails stay in those folders for 30 days before getting
            automatically deleted. This service will automatically and
            permanently delete emails from certain email addresses every 5
            minutes.
          </p>
        </div>
      </div>
      <div className="row">
        <div className="col s12 m8 offset-m2">
          <h2>Sooo... like when would I need this?</h2>
          <p className="flow-text">
            Ever blocked an ex and kept checking your Trash or Spam in Gmail?
            This will make sure that any messages they send you will be
            permanently deleted from those folders before you get a chance to
            read them. Temptation removed :)
          </p>
        </div>
      </div>
    </div>
  );
};

export default Landing;
