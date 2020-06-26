import React from 'react';
import './Home.scss';
import {withRouter} from 'react-router-dom';


const Home = props => (
  <div className="home">
    <h1>Home page</h1>
    <ul className="home__list">
      <li className="home__list-item">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam vero.</li>
      <li className="home__list-item">Laboriosam quaerat sapiente minima nam minus similique illum architecto et!</li>
      <li className="home__list-item">Incidunt vitae quae facere ducimus nostrum aliquid dolorum veritatis dicta!</li>
      <li className="home__list-item">Tenetur laborum quod cum excepturi recusandae porro sint quas soluta!</li>
    </ul>
  </div>
)

export default withRouter(Home);