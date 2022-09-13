import React from 'react'
import {WeatherContext} from '../../context/weatherContext'
import './today.css'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardMedia from '@mui/material/CardMedia'
import  CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'

function Today() {
  return (
    <WeatherContext.Consumer>
        {({weather}) => {
            return (
                <div className='todayContainer'>
                    <Card>
                        <CardHeader title={weather.name} subheader={weather.name} />
                        <CardMedia component="img" 
                        height="200" 
                        image={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} />
                        <CardContent>
                        <Typography variant="body2" color="textSecondary" component="p">
                                {weather.main.temp}
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                {weather.weather[0].description}
                            </Typography>
                            
                        </CardContent>
                    </Card>
                </div>
            )
        }
    }
    </WeatherContext.Consumer>  
    )
}

export default Today