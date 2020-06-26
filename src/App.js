import React, { Component } from 'react';
import './app.scss';
import { Route, NavLink, Switch, Redirect } from 'react-router-dom';
import Home from './Home/Home';
import About from './About/About';
import Cars from './Cars/Cars';
import CarDetail from './CarDetail/CarDetail';

class App extends Component {
  state = {
    isLogedIn: false
  }
  render() {
    const {isLogedIn} = this.state;
    return (
      <div>
        <nav className="nav">
            <ul className="nav__list">
              <li>
                <NavLink to="/" exact activeClassName={'wfm-active'} className="nav__list-link">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" activeStyle={{color: 'blue'}} className="nav__list-link">
                  About
                </NavLink>
              </li>
              <li>
                <NavLink to={{pathname: '/cars'}} className="nav__list-link">
                  Cars
                </NavLink>
              </li>
            </ul>
        </nav>


        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/cars/:name" component={CarDetail} />
          {(this.state.isLogedIn) ? (<Route path="/about" component={About} />) : null}
          {(this.state.isLogedIn) ? (<Route path="/cars" component={Cars} />) : null}
          <Redirect to={'/'} />
        </Switch>

        {
          (!isLogedIn) 
          ? (
            <React.Fragment>
              <div className="app__block">
                <h3>If you accept the conditions our site, you need touch this button</h3>
                <button onClick={() => this.setState({ isLogedIn: true })} className="app__block-btn">Login</button>
              </div>
            </React.Fragment>
          )
          : (
            null
          )
        }

      </div>
    );
  }
}

export default App
