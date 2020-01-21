import React from 'react';
import axios from 'axios';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      city: '',
      locationKey: '',
      cachedData: '',
      loadingData: false,
      day1: '',
      day2: '',
      day3: '',
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(event) {
    event.preventDefault();
    this.setState({ city: event.target.value });
  }

  //city Button
  async handleSubmit(event) {
    event.preventDefault();
    const { data } = await axios.get(`/api/location/${this.state.city}`);
    this.setState({ cachedData: '' });

    if (typeof data === 'object') {
      this.setState({
        day1: data[0].day1,
        day2: data[0].day2,
        day3: data[0].day3,
      });
    } else {
      this.setState({
        locationKey: data,
        cachedData: false,
      });
    }
  }

  //call API button
  async handleClick(event) {
    event.preventDefault();

    this.setState({ loadingData: true });

    const { data } = await axios.get(
      `/api/weather/${this.state.locationKey}/${this.state.city}`
    );

    this.setState({
      day1: data.day1,
      day2: data.day2,
      day3: data.day3,
      loadingData: false,
    });
  }

  render() {
    return (
      <div style={{ fontFamily: 'helvetica', textAlign: 'center' }}>
        <div>3-Day Weather Forecast</div>
        <p>Current City: {this.state.city}</p>
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="city" onChange={this.handleChange} />
          <input type="submit" value="Submit City" />
        </form>
        <br />
        {this.state.cachedData === false ? (
          <div>
            <p>No data found in cache. Grab data from Accuweather API?</p>
            <button onClick={this.handleClick}>Call API</button>
          </div>
        ) : (
          ''
        )}

        <p>{this.state.loadingData === true ? 'loading data' : ''}</p>
        <br />
        <br />
        <p>Today: {this.state.day1.length > 0 ? this.state.day1 : ''}</p>
        <br />
        <p>Tomorrow: {this.state.day2.length > 0 ? this.state.day2 : ''}</p>
        <br />
        <p>Next Day: {this.state.day3.length > 0 ? this.state.day3 : ''}</p>
      </div>
    );
  }
}

export default App;
