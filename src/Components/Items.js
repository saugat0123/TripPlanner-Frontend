import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom'
import axios from 'axios';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

class Items extends Component {

    state = {
        items: [],
        config:{
            headers:{'authorization':`Bearer ${localStorage.getItem('token')}`}
        },
        id:localStorage.getItem('_id')
    }

    componentDidMount() {
        axios.get("http://localhost:3000/item/all")
            .then((response) => {
                this.setState({
                    items: response.data
                })
            })
            .catch((err) => {
                console.log(err.response)
            })
    }

    deleteMyItem=(proId)=>{
        axios.delete('http://localhost:3001/delete/item/'+proId, this.state.config)
        .then((response)=>{
            console.log(response)
            alert("Delete Item??")
            window.location.href='/item/all'
        })
        .catch((err)=>{
            console.log(err.response)
        })
    }

    addtocart=(item_id)=> {
        let fooditems=[];
        fooditems=this.state.items;
        fooditems.map(item => {
            if(item._id===item_id){
               let info={
                productId:item._id,
                seller: item.seller,
                productPrice:item.itemPrice,
                productName:item.itemName, 
                productImage:item.itemImage,
                quantity:1,
                total:item.price
               }
               console.log(info);
               console.log(this.state.config);

               axios.post('http://localhost:3000/cart',info, this.state.config)
               .then((response) => {
                 
                // this.setState({
                //     clicked: true
                //   })
                  window.location.href='/cart'
                  console.log(response)
               })
               .catch((err) => {
                   console.log(err.response)
               })
            
            }
            
        });

  }

    render() {

        return (
            <div className="container">
                <div className="row">
                    {
                        this.state.items.map((item) => {
                            return (

                                // <div class="col-lg-3">
                                //     <div class="card h-100">
                                //         <img class="card-img-top" src={"http://localhost:3001/" + item.itemImage} alt="" />
                                //         <div class="card-body">
                                //             <h4 class="card-title">{item.itemName}</h4>
                                //             <h4 class="card-title">{item.itemPrice}</h4>
                                //             <h4 class="card-title">{item.itemType}</h4>
                                //         </div>
                                //         <div class="card-footer">
                                //         <p><button className="addtocartbutton" onClick={this.addtocart.bind(this,item._id)}>Add To Cart</button></p>
                                //             <p><button onClick={this.deleteMyItem.bind(this,item._id)}>Delete</button></p>
                                //             <p><button><Link to={'/update/food/'+item._id}>Update</Link></button></p>
                                //         </div>
                                //     </div>
                                // </div>
                                
                                <Card style={{ width: '16rem' }}>
                                    <Card.Img variant="top" height="200vh" src={"http://localhost:3000/" + item.itmImage[2]} />
                                    <Card.Body>
                                        <Card.Title><b>{item.itemName}</b></Card.Title>
                                        <Card.Title>Rs. {item.itemPrice}/ night</Card.Title>
                                        <Card.Title>{item.itemType}</Card.Title>
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

export default Items