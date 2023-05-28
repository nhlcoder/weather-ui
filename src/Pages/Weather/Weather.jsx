import { useEffect, useState } from 'react';
import axios from 'axios';
import style from './Weather.module.scss';

function Weather() {
    const [location, setLocation] = useState([]);
    const [current, setCurrent] = useState([]);
    const [city, setCity] = useState('vietnam');

    useEffect(() => {
        const options = {
            method: 'GET',
            url: 'https://weatherapi-com.p.rapidapi.com/current.json',
            params: { q: city, day: 4 },
            headers: {
                'X-RapidAPI-Key': '7558ffd877msh6ccdabbe3bc81ebp12e70ajsn6eb145ec4fc9',
                'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com',
            },
        };
        const fecthData = async () => {
            try {
                const response = await axios.request(options);
                setLocation(response.data.location);
                setCurrent(response.data.current);
            } catch (error) {
                console.error(error);
            }
        };
        fecthData();
    }, [city]);

    const handleChange = (value) => {
        setCity(value.target.value);
    };

    return (
        <div className={style['container']}>
            <div className={style['weather-side']}>
                <div className={style['weather-gradient']}></div>
                <div className={style['date-container']}>
                    <h2 className={style['date-dayname']}>Now</h2>
                    <span className={style['date-day']}>{location.localtime}</span>
                    <i className={style['location-icon']} data-feather="map-pin"></i>
                    <span className={style['location']}>{location.country}</span>
                </div>
                <div className={style['weather-container']}>
                    <i className={style['weather-icon']} data-feather="sun"></i>
                    <h1 className={style['weather-temp']}>{current.temp_c}°C</h1>
                    <h3 className={style['weather-desc']}>Feelslike {current.feelslike_c} °C</h3>
                </div>
            </div>
            <div className={style['info-side']}>
                <div className={style['today-info-container']}>
                    <div className={style['today-info']}>
                        <div className={style['precipitation']}>
                            {' '}
                            <span className={style['title']}>Cloud</span>
                            <span className={style['value']}>{current.cloud}</span>
                            <div className={style['clear']}></div>
                        </div>
                        <div className={style['wind']}>
                            {' '}
                            <span className={style['title']}>Temperature</span>
                            <span className={style['value']}>{current.temp_f} °F</span>
                            <div className={style['clear']}></div>
                        </div>
                        <div className={style['humidity']}>
                            {' '}
                            <span className={style['title']}>Feelslike</span>
                            <span className={style['value']}>{current.feelslike_f} °F</span>
                            <div className={style['clear']}></div>
                        </div>
                    </div>
                </div>
                <div className={style['week-container']}>
                    <ul className={style['week-list']}>
                        <li className={style['active']}>
                            <i className={style['day-icon']} data-feather="sun"></i>
                            <span className={style['day-name']}>UV</span>
                            <span className={style['day-temp']}>{current.uv}</span>
                        </li>
                        <li className={style['active']}>
                            <i className={style['day-icon']} data-feather="cloud"></i>
                            <span className={style['day-name']}>Humidity</span>
                            <span className={style['day-temp']}>{current.humidity} %</span>
                        </li>
                        <li className={style['active']}>
                            <i className={style['day-icon']} data-feather="cloud-snow"></i>
                            <span className={style['day-name']}>Average visibility</span>
                            <span className={style['day-temp']}>{current.vis_km} km</span>
                        </li>
                        <div className={style['clear']}></div>
                    </ul>
                </div>
                <div className={style['location-container']}>
                    <div className={style['location-button']}>
                        <input
                            className={style['location-input-search']}
                            onChange={(e) => handleChange(e)}
                            type="text"
                            placeholder="Enter Location"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Weather;
