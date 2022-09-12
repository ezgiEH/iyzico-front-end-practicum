import React from 'react'
import './App.css'
import Header from './components/header/header'
import Search from './components/search/search'
import CurrentWeather from './components/currentWeather/currentWeather'
import Weather from './components/weather'


function App() {
  return (
    <div className="App">
      <Header />
      <Search />
      <Weather />
    </div>
  )
}

export default App