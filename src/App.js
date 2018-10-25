import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import { Route } from 'react-router-dom';
import HomePage from './components/pages/HomePage';
import Login from './components/pages/Login';

const App = () => (
  <div class="ui container'>
    <Route path='/' exact component={HomePage} />
    <Route path='/login' exact component={LoginPage}
  </div>
)