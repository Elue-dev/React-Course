import React, { Component } from 'react'
import axios from 'axios'

export class Axios2 extends Component {
    constructor(){
        super()

        this.state = {
            city: '',
            weather: '',
            high: '',
            low: '',
            temp: '',
            cityName: '',
            icon: '',
            description: '',

        }
    }

    

    componentDidMount(){
        this.getCityWeather('London')
        var elems = document.querySelectorAll('.modal');
        var instances = window.M.Modal.init(elems);
        
    }

    searchCity = (e) => {
        const city = document.getElementById('city-name').value
        this.getCityWeather(city)

        e.preventDefault();
    }

    getCityWeather = (city) => {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=e312dbeb8840e51f92334498a261ca1d`
        axios.get(url).then((resp) => {
            this.setState ({
                temp: resp.data.main.temp,
                cityName: resp.data.name,
                high: resp.data.main.temp_max,
                low: resp.data.main.temp_min,
                icon: resp.data.weather[0].icon,
                description: resp.data.weather[0].description,
            })
        })
    }

    

    render() {
        const iconUrl = `http://openweathermap.org/img/wn/${this.state.icon}@2x.png`
        return (
            <div>
                 <div className="row">
                    <div className="col s6 offset-s3">
                        <h3>{this.state.temp} degrees</h3>
                            <a className="waves-effect waves-light btn modal-trigger" href="#modal1">Details</a> 
                            <br/><br/>
                            <form onSubmit= {this.searchCity}>
                                <input 
                                    type="text" 
                                    placeholder= "Enter a city name"
                                    id= "city-name"
                                />
                            </form>
                        </div>
                    </div>
                    <div id="modal1" className="modal">
                        <div className="modal-content">
                            <h4>{this.state.cityName}</h4>
                            <br/>
                            <p><b>High</b>: {this.state.high} - <b>Low</b>: {this.state.low}</p>
                            <br/>
                            <p><b>Weather description</b>: {this.state.description} <img className= "modal-img" src={iconUrl} /></p>
                        </div>
                        <div className="modal-footer">
                            <a href="#!" className="modal-close waves-effect waves-green btn-flat">OK</a>
                        </div>
                    </div>
            </div>
        )
    }
}

export default Axios2
