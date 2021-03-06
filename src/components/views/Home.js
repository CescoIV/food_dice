import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, NavLink, Switch } from 'react-router-dom';
import { Redirect } from 'react-router';

import OAuthButton from '../account/OAuthButton';
import UserInfo from '../common/UserInfo';
import { auth } from '../../utils/firebase';
import './Home.css';
import Search from '../results/Search';

import Login from './Login';
import Header from '../common/Header';
import ResultForm from '../results/ResultForm.js';
import SearchTypes from '../views/SearchTypes.js';



export default class Home extends Component {
  render() {
    return (
      <Router>
        <div className='Home'>
          <Header />
          <SearchTypes />
      </div>
    </Router>
    );
  }
}

