import React, {Component} from 'react';
import {Switch, HashRouter} from 'react-router-dom'
import Dashboard from './Components/Dashboard/dashboard';
import Form from './Components/Form/form';
import Header from './Components/Header/header';
import Product from './Components/Product/product';


export default (
    <Switch>
        <Route exact path='/' component={Components} />
        <Route path='/dashboard' component={Dashboard} />
        <Route  path='/form' component={Form} />
        <Route  path='/header' component={Header} />
        <Route  path='/product' component={Product} />
    </Switch>
)