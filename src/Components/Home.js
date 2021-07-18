import axios from 'axios';
import { Component } from 'react';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

class Home extends Component {
    state = {
        items: []
    }

    componentDidMount() {
        axios.get('http://localhost:3000/hotel/all', this.state.config)
            .then((response) => {
                console.log(response)
                this.setState({
                    items: response.data                   
                })
                
            })
            .catch((err) => {
                console.log(err.response)
            })
    }
    render() {
        return (
            <div class="container">
                <header class="jumbotron my-4">
                    <h1 class="display-3">A Warm Welcome!</h1>
                    <p class="lead">Life is meant for good friends and great adventures. Plan a trip and go WILD!!</p>
                    <a href="#" class="btn btn-primary btn-lg">Explore!</a>
                </header>
                <div class="row">
                    {
                       this.state.items.map((item) => {
                            return (
                                <Card style={{ width: '16rem' }}>
                                    <Card.Img variant="top" height="200vh" src={"http://localhost:3000/" + item.image[2]} />
                                    <Card.Body>
                                        <Card.Title><b>{item.name}</b></Card.Title>
                                        <Card.Title>Rs. {item.price}/ night</Card.Title>
                                        <Card.Title>{item.location}</Card.Title>
                                        {/* <Button variant="outline-primary" Link to={'/update/hotel/'+item._id}>Update</Button>
                                        <Button variant="danger" onClick={this.deleteMyItem.bind(this,item._id)}>Delete</Button> */}
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

export default Home;    