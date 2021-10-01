import React, { Component } from 'react'
import axios from 'axios'
import '../Components/main.css'

export class Axios extends Component {
    constructor(){
        super();

        this.state = {
            temp: '',
            cityName: '',
            cityName: '',
            weather: '',
            high: '',
            low: '',
            icon: '',
            cityName: '',
            
        }


 }

 

 componentDidMount(){
    const url = 'https://api.openweathermap.org/data/2.5/weather?q=London&units=imperial&appid=e312dbeb8840e51f92334498a261ca1d'
        axios.get(url).then((resp) => {
        this.setState ({
            temp: resp.data.main.temp,
            high: resp.data.main.temp_max,
            low: resp.data.main.temp_min,
            temp: resp.data.main.temp_min,
            weather: resp.data.weather[0].description,
            icon: resp.data.weather[0].icon,
            cityName: resp.data.name
      })
   })

   var elems = document.querySelectorAll('.modal');
            var instances = window.M.Modal.init(elems);
 }

 searchCity = (e) => {
    e.preventDefault()
    const city = document.getElementById('city').value
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=e312dbeb8840e51f92334498a261ca1d`
        axios.get(url).then((resp) => {
        this.setState ({
            temp: resp.data.main.temp,
            high: resp.data.main.temp_max,
            low: resp.data.main.temp_min,
            temp: resp.data.main.temp_min,
            weather: resp.data.weather[0].description,
            icon: resp.data.weather[0].icon,
            cityName: resp.data.name
      })
   })
 }

    render() {
        const iconUrl = `http://openweathermap.org/img/wn/${this.state.icon}@2x.png`
        
        return (
          <div>
            <div>
                <div className="row">
                        <h3>Temperature: {this.state.temp}</h3>
                        <a className="waves-effect waves-light btn modal-trigger" href="#modal1">Details</a>
                        <form onSubmit = {this.searchCity}>
                            <input 
                                type="text"
                                placeholder= "Enter a city"
                                id= "city"
                            />
                        </form>
                    </div>
                 </div>

                <div id="modal1" className="modal">
                    <div className="modal-content">
                    <h4>{this.state.cityName}</h4>
                    <p>High: {this.state.high}  -  Low: {this.state.low}</p>
                    <p>{this.state.weather}  -  <img className = "modal-img" src= {iconUrl} /> </p>
                </div>
                 <div className="modal-footer">
                    <a href="#!" className="modal-close waves-effect waves-green btn-flat">Okay</a>
                    </div>
                </div>
            </div>
        )
    }
}



export default Axios
