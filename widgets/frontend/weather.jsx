import React from 'react';

class Weather extends React.Component {
  constructor () {
    super();
    this.fetchWeather();
  }

  render() {
    return (
      <div className="weather">
          HIHIHIHII
      </div>
    )
  }

  fetchWeather(){
    console.log("here");
    const apiKey = 'f816d7f39052e3a98b21952097a43076';
    let url = 'http://api.openweathermap.org/data/2.5/weather?lat=20&long=25'
    url += `&APPID=${apiKey}`;
    let xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = () => {
      //ready state of DONE means this is complete
      if (xmlhttp.status === 200 && xmlhttp.readyState === XMLHttpRequest.DONE) {
        const data = JSON.parse(xmlhttp.responseText);
        console.log(data);
        // this.setState({weather: data});
      }
    };

    xmlhttp.open('GET', url, true);
    xmlhttp.send();
  }
}

export default Weather;