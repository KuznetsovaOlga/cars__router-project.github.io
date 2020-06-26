import React, {Component} from 'react';
import Car from './Car/Car';
import "./Car/car.scss";

export default class Cars extends Component {
  state = {
    cars: [
      {name: 'Ford', year: 2018},
      {name: 'Audi', year: 2016},
      {name: 'Mazda', year: 2010}
    ]
  }

  goToHomePage = () => {
    this.props.history.push({
      pathname: '/'
    })
  }

  render() {
    return (
      <div className="cars">
        <button onClick={this.goToHomePage} className="cars-btn">Go to home page</button>
        <hr/>
        {this.state.cars.map((car, index) => {
          return (
            <Car
              key={index}
              name={car.name}
              year={car.year}
            />
          )
        })}
      </div>
    )
  }
}