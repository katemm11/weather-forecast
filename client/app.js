import React from 'react';
import axios from 'axios';

class App extends React.Component {
  constructor() {
    super();
    this.state = { city: '', locationKey: '' };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  async handleClick(event) {
    event.preventDefault();

    console.log('locationKey', this.state.locationKey);
    const { data } = axios.get(`/api/weather/${this.state.locationKey}`);
    console.log('weather data is', data);
  }

  handleChange(event) {
    event.preventDefault();
    this.setState({ city: event.target.value });
    console.log(this.state);
  }

  async handleSubmit(event) {
    event.preventDefault();
    console.log('submitted!');
    console.log(this.state.city);

    const { data } = await axios.get(`/api/location/${this.state.city}`);
    console.log('axios data is ', data);
    this.setState({ locationKey: data });
  }

  render() {
    return (
      <div style={{ fontFamily: 'helvetica', textAlign: 'center' }}>
        <div>3-Day Weather Forecast</div>
        <p>Current City: {this.state.city}</p>
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="city" onChange={this.handleChange} />
          <input type="submit" value="Submit City Location" />
        </form>
        <br />
        <button onClick={this.handleClick}>Get My 3-day Forecast</button>
        <br />
        <br />
        <div>Day 1:</div>
        <br />
        <div>Day 2:</div>
        <br />
        <div>Day 3:</div>
      </div>
    );
  }
}

export default App;
