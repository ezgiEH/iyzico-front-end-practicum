import {useState, useEffect} from 'react'
import axios from 'axios'




function Weather() {
    const [lat, setLat] = useState([])
    const [long, setLong] = useState([])
    const [data, setData] = useState([])
    

    const lang = navigator.language.split("-")[0];
    const getWeatherData = async (lat, long) => {
        const res = await axios.get(`${process.env.REACT_APP_API_URL}/weather/?lat=${lat}&lon=${long}&units=metric&appid=${process.env.REACT_APP_API_KEY}&lang=${lang}`)
        setData(res.data)
    }


    useEffect(() =>{
       
        navigator.geolocation.getCurrentPosition(position => {
            setLat(position.coords.latitude)
            setLong(position.coords.longitude)
        })

        lat && long && getWeatherData(lat,long)

    } ,[lat,long])
    

  return (
    <div>
        <div className="weather-container">
            <div className="weather-header">
                <h1>{data.name}</h1>
                
            </div>
        </div>
    </div>
  )
}

export default Weather

