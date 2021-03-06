import React from 'react';
import './cardetail.scss';

export default class CarDetail extends React.Component{
    render(){
        console.log('props', this.props)
        return (
            <div style={{textAlign:'center'}}>
                <h1>{this.props.match.params.name}</h1>
                {
                    this.props.match.params.name === 'ford'
                    ? (<img  src="https://img.drive.ru/i/0/5cae2468ec05c47911000041.jpg" alt="ford" className="about-img"/>)
                    : (this.props.match.params.name === 'mazda')
                    ? (<img  src="https://www.mazda.ru/globalassets/--08-19/m6_city_hero_2_1800x900-min.png" alt="mazda" className="about-img"/>)
                    : (this.props.match.params.name === 'audi')
                    ? (<img src="https://cdn.motor1.com/images/mgl/EM63M/s1/2019-audi-q8.jpg" alt="audi" className="about-img"/>)
                    : (null)
                }
            </div>
        )
    }
}