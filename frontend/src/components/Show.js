import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Show extends Component {

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

  delete(id){
    console.log(id);
    axios.delete('/waterpoints/'+id)
      .then((result) => {
        this.props.history.push("/")
      });
  }

  render() {
    return (
      <div class="container">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h3 class="panel-title">
              waterpoint details
            </h3>
          </div>
          <div class="panel-body">
            <h4><Link to="/"><span class="glyphicon glyphicon-th-list" aria-hidden="true"></span> waterpoints</Link></h4>
            <dl>
              <dt>Name:</dt>
              <dd>{this.state.waterpoint.name}</dd>
              <dt>Address:</dt>
              <dd>{this.state.waterpoint.location}</dd>
              <dt>City:</dt>
              <dd>{this.state.waterpoint.latitude}</dd>
              <dt>Phone Number:</dt>
              <dd>{this.state.waterpoint.longitude}</dd>
              <dt>Email Address:</dt>
              <dd>{this.state.waterpoint.capacity}</dd>
            </dl>
            <Link to={`/edit/${this.state.waterpoint.id}`} class="btn btn-success">Edit</Link>&nbsp;
            <button onClick={this.delete.bind(this, this.state.waterpoint.id)} class="btn btn-danger">Delete</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Show;