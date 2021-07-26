import React, { Component } from "react";
import axios from 'axios';
import { Link, Route } from 'react-router-dom';


class Item extends Component {
    state = {
        name: '',
        price: '',
        description: '',
        location: '',
        rooms: '',
        image: '',
        config: {
            headers: { "authorization": `Bearer ${localStorage.getItem('token')}` }
        }
    }

    changeHandler = (e) => {

        this.setState({

            [e.target.name]: e.target.value
        })

    }

    fileHandler = (e) => {

        this.setState({
            image: e.target.files
        })
    }


    insertFile = (e) => {
        e.preventDefault()
        const data = new FormData()
        data.append('name', this.state.name)
        data.append('description', this.state.description)
        data.append('price', this.state.price)
        data.append('rooms', this.state.rooms)
        data.append('location', this.state.location)
        
        for (const i of Object.keys(this.state.image)) {
            data.append('image', this.state.image[i])
        }

        axios.post('http://localhost:3000/add/hotel', data, this.state.config)
            .then((response) => {
                alert("New Hotel Added!!")
            })


    }

    render() {
        return (
            <div class="row" id = "add-hotel">
                <div class="col-lg-7 mx-auto">

                    <div class="card mt-2 mx-auto p-4 bg-light">
                        <div class="card-body bg-light">
                            <div class="container">
                                <div class="labelSignup">
                                    <h2>Add Hotel</h2>
                                </div>
                                <form id="contact-form" role="form">

                                    <div class="controls">
                                        <div class="row">
                                            <div class="col-md-12">
                                                <div class="form-group"> <label for="form_image"> Images</label> <input onChange={this.fileHandler} type="file" name="image"  multiple="multiple" class="form-control btn btn-primary" placeholder="Add image" required="required" /> </div>
                                            </div>

                                        </div>
                                        <div class="row">
                                            <div class="col-md-12">
                                                <div class="form-group"> <label for="form_name"> Name *</label> <input onChange={this.changeHandler} name="name" class="form-control" placeholder="Enter hotel name" required="required" data-error="Firstname is required." /> </div>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-12">
                                                <div class="form-group"> <label for="form_name"> Description *</label> <input onChange={this.changeHandler} name="description" class="form-control" placeholder="Enter hotel description" required="required" data-error="Description is required." /> </div>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-12">
                                                <div class="form-group"> <label for="form_price">Price Per Room *</label> <input onChange={this.changeHandler} name="price" class="form-control" placeholder="Enter hotel price" /> </div>
                                            </div>

                                        </div>
                                        <div class="row">
                                            <div class="col-md-12">
                                                <div class="form-group"> <label for="form_type">Location *</label> <input onChange={this.changeHandler} name="location" class="form-control" placeholder="Enter hotel loacation" required="required" data-error="Description is required." /> </div>
                                            </div>

                                        </div>

                                        <div class="row">
                                            <div class="col-md-12">
                                                <div class="form-group"> <label for="form_type">Rooms *</label> <input onChange={this.changeHandler} name="rooms" class="form-control" placeholder="Enter number of rooms" required="required" data-error="Description is required." /> </div>
                                            </div>

                                        </div>

                                        <div class="row" >
                                            <div class="col-md-12" > <input type="submit" class="btn btn-success btn-send pt-2 btn-block " onClick={this.insertFile} value="Add Hotel" /> </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

export default Item;