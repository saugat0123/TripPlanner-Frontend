import React, { Component } from "react";
import axios from "axios";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

class Book extends Component {
  state = {
    items: [],
    checkin: "",
    checkout: "",
    numAdult: "",
    numChild: "",
    numRoom: "",
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
          items: response.data,
        });
      })
      .catch((err) => {
        console.log(err.response);
      });
  }

  changeHandle = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  bookUser = (Id) => {
    let fooditems = [];
    fooditems = this.state.items;
    fooditems.map((item) => {
      if (item._id === Id) {
        let info = {
          hId: item._id,
          checkin: this.state.checkin,
          checkout: this.state.checkout,
          numAdult: this.state.numAdult,
          numChild: this.state.numChild,
          numRoom: this.state.numRoom,
          total: item.price * this.state.numRoom,
        };
        console.log(info);
        console.log(this.state.config);

        axios
          .post("http://localhost:3000/book", info, this.state.config)
          .then((response) => {
            // this.setState({
            //     clicked: true
            //   })
            // window.location.href = "/cart";
            alert("Hotel Booked!!")
            console.log(response);
          })
          .catch((err) => {
            console.log(err.response);
          });
      }
    });
  };

  render() {
    return (
      <div class="container">
        <div class="row">
          <div class="col-lg-4">
            <h2>You have selected Hotel </h2> <br></br>{" "}
            <br></br>
            <Card style={{ width: "18rem" }}>
              <Card.Img
                variant="top"
                height="200vh"
               
              />
            </Card>
            <div>
              <h2>Hotel Description</h2>
              <h3>{this.state.description}</h3>
            </div>
          </div>
          <div class="col-lg-8">
            <form className="col-sm-6 offset-sm-3 mx-20" id="signup">
              <div>
                <h3>Fill out the form to book!</h3>
              </div>

              <div class="mb-2" id="signup-fname">
                <label for="checkin" class="form-label">
                  Checkin Date
                </label>
                <input
                  type="date"
                  class="form-control"
                  id="checkin"
                  name="checkin"
                  value={this.state.checkin}
                  onChange={this.changeHandle}
                />
                <div style={{ fontSize: 12, color: "red" }}>
                  {this.state.checkinError}
                </div>
              </div>

              <div class="mb-2">
                <label for="checkout" class="form-label">
                  Checkin Date
                </label>
                <input
                  type="date"
                  class="form-control"
                  id="checkout"
                  name="checkout"
                  value={this.state.checkout}
                  onChange={this.changeHandle}
                />
                <div style={{ fontSize: 12, color: "red" }}>
                  {this.state.checkoutError}
                </div>
              </div>

              <div class="mb-2">
                <label for="numAdult" class="form-label">
                  Number of Adults
                </label>
                <input
                  type="number"
                  placeholder="Enter number of adults"
                  class="form-control"
                  id="numAdult"
                  name="numAdult"
                  value={this.state.numAdult}
                  onChange={this.changeHandle}
                />
              </div>
              <div class="mb-2">
                <label for="numChild" class="form-label">
                  Number of Children
                </label>
                <input
                  type="number"
                  placeholder="Enter number of child"
                  class="form-control"
                  id="numChild"
                  name="numChild"
                  value={this.state.numChild}
                  onChange={this.changeHandle}
                />
              </div>
              <div class="mb-2">
                <label for="numRoom" class="form-label">
                  Number of Rooms
                </label>
                <input
                  type="number"
                  placeholder="Enter number of rooms"
                  class="form-control"
                  id="numRoom"
                  name="numRoom"
                  value={this.state.numRoom}
                  onChange={this.changeHandle}
                />
              </div>

              <button
                type="submit"
                className="btn btn-primary"
                onClick={this.bookUser}
                id="signup-btn"
              >
                Confirm Book
              </button>
            </form>
          </div>
        </div>
        {/* <div class="row">
          <div class="col-lg-4">
            <Button variant="outline-primary" href="/">
              Explore Hotels
            </Button>
          </div>
          <div class="col-lg-4">
            <Button variant="outline-success">Book Hotel</Button>
          </div>
          <div class="col-lg-4">
            <Button variant="outline-info">Bookmark</Button>
          </div>
        </div> */}
      </div>
    );
  }
}
export default Book;
