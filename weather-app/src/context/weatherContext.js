import {useContext, createContext, useState,useEffect} from 'react'
import axios from 'axios'

export const WeatherContext = createContext()
export const useWeatherContext = () => useContext(WeatherContext)


export const WeatherProvider = (props) => {
    const [lat, setLat] = useState([])
    const [long, setLong] = useState([])
    const [weather, setWeather] = useState([])
    const lang = navigator.language.split("-")[0]

    

    useEffect(() =>{

        const getWeatherData = async(lat, long) => {
            axios(`${process.env.REACT_APP_API_URL}/weather/?lat=${lat}&lon=${long}&units=metric&appid=${process.env.REACT_APP_API_KEY}&lang=${lang}`)
           .then(res => {
               setWeather(res.data)
               console.log(res.data)
           })
           }
           
        if(navigator.geolocation){
            navigator.geolocation.getCurrentPosition(position => {
                setLat(position.coords.latitude)
                setLong(position.coords.longitude)
                getWeatherData(position.coords.latitude, position.coords.longitude)
            } )
        }
    },[lat, long, lang])

  return (
    <WeatherContext.Provider value={{weather}}>
      {props.children}
    </WeatherContext.Provider>
  )
}

export default WeatherProvider;