import React, { Component } from 'react';

class SignUpPage extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      nationality: '',
    };
  }

  handleInputChange = (event) => {
    const value = event.target.value;
    const property = event.target.name;

    this.setState({
      [property]: value,
    });
  };

  handleFormSubmition = (event) => {
    event.preventDefault();
  };

  render() {
    return (
      <div className="App">
        <form onSubmit={this.handleFormSubmition}>
          <label htmlFor="email-input">Email</label>
          <input
            name="email"
            id="email-input"
            type="email"
            placeholder="Email"
            value={this.state.email}
            onChange={this.handleInputChange}
          />
          <label htmlFor="password-input">Password</label>
          <input
            name="password"
            id="password-input"
            type="password"
            placeholder="Password"
            value={this.state.password}
            onChange={this.handleInputChange}
          />
          <label htmlFor="nationality-input">Nationality:</label>
          <select
            id="nationality-input"
            name="nationality"
            onChange={this.handleInputChange}
          >
            <option value="en">English</option>
            <option value="de">German</option>
            <option value="fr">French</option>
          </select>
          <button>Sign Up</button>
        </form>
        <p>
          {this.state.nationality === 'en'
            ? 'Hello'
            : this.state.nationality === 'de'
            ? 'Hallo'
            : this.state.nationality === 'fr'
            ? 'Bonjour'
            : ''}
        </p>
        <p>Your email adress is: {this.state.email}</p>
        <p>
          {this.state.email.includes('@')
            ? 'Your email adress is correct'
            : 'Your email adress is incorrect'}
          .
        </p>
      </div>
    );
  }
}

export default SignUpPage;
