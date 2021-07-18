import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom'
import axios from 'axios';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

class Hotels extends Component {

    state = {
        items: [],
        config: {
            headers: { 'authorization': `Bearer ${localStorage.getItem('token')}` }
        },
        id: localStorage.getItem('_id')
    }

    componentDidMount() {
        axios.get("http://localhost:3000/hotel/all")
            .then((response) => {
                this.setState({
                    items: response.data
                })
            })
            .catch((err) => {
                console.log(err.response)
            })
    }

    deleteMyItem = (hotelID) => {
        axios.delete('http://localhost:3000/delete/hotel/' + hotelID, this.state.config)
            .then((response) => {
                console.log(response)
                alert("Delete Hotel??")
                window.location.href = '/hotels'
            })
            .catch((err) => {
                console.log(err.response)
            })
    }

    render() {

        return (
            <div className="container">
                <div className="row">
                    {
                        this.state.items.map((item) => {
                            return (
                                <Card style={{ width: '16rem' }}>
                                    <Card.Img variant="top" height="200vh" src={"http://localhost:3000/" + item.image[2]} />
                                    <Card.Body>
                                        <Card.Title><b>{item.name}</b></Card.Title>
                                        <Card.Title>Rs. {item.price}/ night</Card.Title>
                                        <Card.Title>{item.location}</Card.Title>
                                        <Button variant="outline-primary" Link to={'/update/hotel/'+item._id}>Update</Button>
                                        <Button variant="danger" onClick={this.deleteMyItem.bind(this,item._id)}>Delete</Button>
                                    </Card.Body>
                                </Card>
                            )
                        })
                    }

                </div>
            </div>
        )
    }
}

export default Hotels