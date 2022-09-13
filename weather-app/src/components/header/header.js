import React from 'react'
import './header.css'
import img from '../../assets/github.svg';
import WeatherContext from '../../context/weatherContext'

function Header() {
  return (
    <div className='headerContainer'>
        <h1>Weather App</h1>
        <a href="http://www.github.com/ezgiEH">
            <img src={img}></img>
        </a>
    </div>
  )
}

export default Header