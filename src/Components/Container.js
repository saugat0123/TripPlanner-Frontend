import React, { Component } from 'react';
import Login from './Login'
import Register from './Register';
import Hotels from './Hotels';
import AddHotel from './AddHotel';
import Home from './Home';
import Items from './Items';
import AddItem  from './AddItem';
import { Route } from 'react-router-dom'

class Container extends Component {
    render() {
        return (
            <div class="container">
                <Route path='/' exact component={Home} />
                <Route path='/register' component={Register} />
                <Route path='/login' component={Login} />
                <Route path='/hotels' component={Hotels} />
                <Route path='/add/hotel' component={AddHotel} />
                <Route path='/add/item' component={AddItem} />
                <Route path='/item/all' component={Items} />
            </div>
        )
    }
}

export default Container