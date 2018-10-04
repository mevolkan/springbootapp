import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Create extends Component {

  constructor() {
    super();
    this.state = {
      name: '',
      location: '',
      latitude: '',
      longitude: '',
      capacity: ''
    };
  }
  onChange = (e) => {
    const state = this.state
    state[e.target.name] = e.target.value;
    this.setState(state);
  }

  onSubmit = (e) => {
    e.preventDefault();

    const { name, location, latitude, longitude, capacity } = this.state;

    axios.post('/waterpoints', { name, location, latitude, longitude, capacity })
      .then((result) => {
        this.props.history.push("/")
      });
  }

  render() {
    const { name, location, latitude, longitude, capacity } = this.state;
    return (
      <div class="container">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h3 class="panel-title">
              Add Water Point
            </h3>
          </div>
          <div class="panel-body">
            <h4><Link to="/"><span class="glyphicon glyphicon-th-list" aria-hidden="true"></span> water points</Link></h4>
            <form onSubmit={this.onSubmit}>
              <div class="form-group">
                <label for="isbn">Name:</label>
                <input type="text" class="form-control" name="name" value={name} onChange={this.onChange} placeholder="Name" />
              </div>
              <div class="form-group">
                <label for="title">location:</label>
                <input type="text" class="form-control" name="location" value={location} onChange={this.onChange} placeholder="location" />
              </div>
              <div class="form-group">
                <label for="author">latitude:</label>
                <input type="text" class="form-control" name="latitude" value={latitude} onChange={this.onChange} placeholder="latitude" />
              </div>
              <div class="form-group">
                <label for="published_date">longitude:</label>
                <input type="text" class="form-control" name="longitude" value={longitude} onChange={this.onChange} placeholder="longitude Number" />
              </div>
              <div class="form-group">
                <label for="publisher">capacity:</label>
                <input type="capacity" class="form-control" name="capacity" value={capacity} onChange={this.onChange} placeholder="capacity location" />
              </div>
              <button type="submit" class="btn btn-default">Submit</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Create;