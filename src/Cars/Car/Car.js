import React from 'react';
import './car.scss';
import {withRouter} from 'react-router-dom';


const Car = props => {
  console.log(props)
  return (
    <div
      className="car"
      onClick={() => props.history.push('/cars/' + props.name.toLowerCase())}
    >
      <h3>Сar: {props.name}</h3>
      <p>Year: <strong>{props.year}</strong></p>
    </div>
  )
}

export default withRouter(Car);