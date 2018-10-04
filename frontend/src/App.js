import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      waterpoints: []
    };
  }

  componentDidMount() {
    axios.get('/waterpoints')
      .then(res => {
        this.setState({ waterpoints: res.data });
        console.log(this.state.waterpoints);
      });
  }

  render() {
    return (
      <div class="container">

        <div class="panel panel-default">
          <div class="panel-heading">
            <h3 class="panel-title">
              Water points
            </h3>
          </div>
          <div class="panel-body">
            <h4><Link to="/create"><span class="glyphicon glyphicon-plus-sign" aria-hidden="true"></span> Add Water Point</Link></h4>
            <table class="table table-stripe">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Location</th>
                  <th>Capacity</th>
                </tr>
              </thead>
              <tbody>
                {this.state.waterpoints.map(c =>
                  <tr>
                    <td><Link to={`/show/${c.id}`}>{c.name}</Link></td>
                    <td>{c.location}</td>
                    <td>{c.capacity}</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default App;