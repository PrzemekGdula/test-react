import React, { Component } from 'react';

class App extends Component {
  state = {
    data: [],
    newData: '',
  }
  render() {
    return (
      <div>
        <input
          value={this.state.newData}
          onChange={event => this.setState({
            data: this.state.data,
            newData: event.target.value,
          })}
        />
        <button
          onClick={event => this.setState({
            data: this.state.data.concat(this.state.newData),
            newData: '',
          })}
        >
          Dodaj
        </button>
        <ol>
        {
          this.state.data.map((string, index) => (
            <li>
              {this.state.data}
            </li>
          )).reverse()
        }
        </ol>
      </div>
    );
  }
}

export default App;