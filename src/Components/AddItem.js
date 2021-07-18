import React, { Component } from "react";
import axios from 'axios';
import { Link, Route } from 'react-router-dom';


class Item extends Component {
    state = {
        itemName: '',
        itemType: '',
        itemPrice: '',
        image: null,
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
            image: e.target.files[0]
        })
    }


    insertFile = (e) => {
        e.preventDefault()
        const data = new FormData()
        data.append('itemName', this.state.itemName)
        data.append('itemType', this.state.itemType)
        data.append('image', this.state.image)
        data.append('itemPrice', this.state.itemPrice)

        axios.post('http://localhost:3000/add/item', data, this.state.config)
            .then((response) => {
                alert("Food Item Added!!")
            })


    }

    render() {
        return (
            <div class="row ">
                <div class="col-lg-7 mx-auto">

                    <div class="card mt-2 mx-auto p-4 bg-light">
                        <div class="card-body bg-light">
                            <div class="container">
                                <div class="labelSignup">
                                    <h2>Add Food</h2>
                                </div>
                                <form id="contact-form" role="form">

                                    <div class="controls">
                                        <div class="row">
                                            <div class="col-md-6">
                                                <div class="form-group"> <label for="form_image">Image</label> <input onChange={this.fileHandler} type="file" name="image" class="form-control btn btn-danger" placeholder="Add image" required="required" /> </div>
                                            </div>

                                        </div>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <div class="form-group"> <label for="form_name">Item Name *</label> <input onChange={this.changeHandler} name="itemName" class="form-control" placeholder="Please enter your product name *" required="required" data-error="Firstname is required." /> </div>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <div class="form-group"> <label for="form_price">Item Price *</label> <input onChange={this.changeHandler} name="itemPrice" class="form-control" placeholder="Please enter the price of product" /> </div>
                                            </div>

                                        </div>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <div class="form-group"> <label for="form_type">Item Type *</label> <input onChange={this.changeHandler} name="itemType" class="form-control" placeholder="Please enter the product description *" required="required" data-error="Description is required." /> </div>
                                            </div>

                                        </div>

                                        <div class="row">
                                            <div class="col-md-12"> <input type="submit" class="btn btn-success btn-send pt-2 btn-block " onClick={this.insertFile} value="Add Product" /> </div>
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