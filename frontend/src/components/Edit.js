import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Edit extends Component {

  constructor(props) {
    super(props);
    this.state = {
      waterpoint: {}
    };
  }

  componentDidMount() {
    axios.get('/waterpoints/'+this.props.match.params.id)
      .then(res => {
        this.setState({ waterpoint: res.data });
        console.log(this.state.waterpoint);
      });
  }

  onChange = (e) => {
    const state = this.state.waterpoint
    state[e.target.name] = e.target.value;
    this.setState({waterpoint:state});
  }

  onSubmit = (e) => {
    e.preventDefault();

    const { name, location, latitude, longitude, capacity } = this.state.waterpoint;

    axios.put('/waterpoints/'+this.props.match.params.id, { name, location, latitude, longitude, capacity })
      .then((result) => {
        this.props.history.push("/show/"+this.props.match.params.id)
      });
  }

  render() {
    return (
      <div class="container">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h3 class="panel-title">
              edit waterpoint
            </h3>
          </div>
          <div class="panel-body">
            <h4><Link to={`/show/${this.state.waterpoint.id}`}><span class="glyphicon glyphicon-eye-open" aria-hidden="true"></span> waterpoint List</Link></h4>
            <form onSubmit={this.onSubmit}>
              <div class="form-group">
                <label for="name">Name:</label>
                <input type="text" class="form-control" name="name" value={this.state.waterpoint.name} onChange={this.onChange} placeholder="Name" />
              </div>
              <div class="form-group">
                <label for="title">Location:</label>
                <input type="text" class="form-control" name="location" value={this.state.waterpoint.location} onChange={this.onChange} placeholder="Address" />
              </div>
              <div class="form-group">
                <label for="author">Latitude:</label>
                <input type="text" class="form-control" name="latitude" value={this.state.waterpoint.latitude} onChange={this.onChange} placeholder="latitude" />
              </div>
              <div class="form-group">
                <label for="published_date">Longitude:</label>
                <input type="text" class="form-control" name="longitude" value={this.state.waterpoint.longitude} onChange={this.onChange} placeholder="longitude Number" />
              </div>
              <div class="form-group">
                <label for="description">Capacity:</label>
                <input type="capacity" class="form-control" name="capacity" value={this.state.waterpoint.capacity} onChange={this.onChange} placeholder="capacity Address" />
              </div>
              <button type="submit" class="btn btn-default">Update</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Edit;