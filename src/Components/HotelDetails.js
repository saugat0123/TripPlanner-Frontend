import React, { Component } from "react";
import axios from "axios";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

class HotelDetails extends Component {
  state = {
    name: "",
    price: "",
    description: "",
    location: "",
    rooms: "",
    image: "",
    Id: this.props.match.params.id,
    config: {
      headers: { authorization: `Bearer ${localStorage.getItem("token")}` },
    },
  };

  componentDidMount() {
    axios
      .get("http://localhost:3000/hotel/" + this.state.Id)
      .then((response) => {
        this.setState({
          name: response.data.name,
          price: response.data.price,
          description: response.data.description,
          location: response.data.location,
          rooms: response.data.rooms,
          image: response.data.image,
        });
      })
      .catch((err) => {
        console.log(err.response);
      });
  }

  changeHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    return (
      <div class="container">
        <div class="row">
          <div class="col-lg-4">
            <h2>Hotel {this.state.name}</h2> <br></br> <br></br>
            <Card style={{ width: "18rem" }}>
              <Card.Img
                variant="top"
                height="200vh"
                src={"http://localhost:3000/" + this.state.image[0]}
              />
            </Card>
            <Card style={{ width: "18rem" }}>
              <Card.Img
                variant="top"
                height="200vh"
                src={"http://localhost:3000/" + this.state.image[1]}
              />
            </Card>
            <Card style={{ width: "18rem" }}>
              <Card.Img
                variant="top"
                height="200vh"
                src={"http://localhost:3000/" + this.state.image[2]}
              />
            </Card>
          </div>
          <div class="col-lg-8">
            <div>
              <h2>Hotel Description</h2>
              <h3>{this.state.description}</h3>
            </div>
            <div>
              <br></br>
              <h2>Location</h2>
              <h3>{this.state.location}</h3>
            </div>
            <div>
              <br></br>
              <h2>Price per night</h2>
              <h3>{this.state.price}</h3>
            </div>
            <div>
              <br></br>
              <h2>Number of Rooms</h2>
              <h3>{this.state.rooms}</h3>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-4">
          <Button variant="outline-primary" href="/">Explore Hotels</Button>
          </div>
          <div class="col-lg-4">
          <Button variant="outline-success" >Book Hotel</Button>
          </div>
          <div class="col-lg-4">
          <Button variant="outline-info" >Bookmark</Button>
          </div>
        </div>
      </div>
    );
  }
}
export default HotelDetails;
