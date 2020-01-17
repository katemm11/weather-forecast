import React from 'react';

class App extends React.Component {
  constructor() {
    super();
    this.state = { city: '' };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit() {
    event.preventDefault();
    console.log('submitted!');
  }

  render() {
    return (
      <div>
        <div>3-Day Weather Forecast</div>

        <form>
          <label>
            City
            <input type="text" name="city" />
          </label>
          <button type="submit" onClick={this.handleClick}>
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default App;
