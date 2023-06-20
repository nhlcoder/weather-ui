import { useState } from 'react';
import style from './Weather.module.scss';

const API_KEY = '34c3f3df8a89471dbd463858232705';

function Weather() {
    const [weatherData, setWeatherData] = useState(null);
    const [listWeather, setListWeather] = useState([]);
    const [city, setCity] = useState('');
    const [error, setError] = useState(null);

    const handleSearch = async () => {
        setError(null);
        setWeatherData(null);
        const currentResponse = await fetch(
            `http://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${city}&days=${15}`,
        );
        if (currentResponse.ok) {
            const currentData = await currentResponse.json();
            setWeatherData(currentData);
            setListWeather(currentData.forecast.forecastday);
        } else {
            setError('Invalid city name. Please try again.');
            return;
        }
    };

    const handleChange = (value) => {
        setCity(value.target.value);
    };

    return (
        <div className={style['container']}>
            <div className={style['location-container']}>
                <div className={style['location-button']}>
                    <input
                        className={style['location-input-search']}
                        onChange={(e) => handleChange(e)}
                        type="text"
                        placeholder="Enter Location"
                    />
                    <></>
                    <center>
                        <button className={style['button']} onClick={handleSearch}>
                            Search
                        </button>
                        {error && <p style={{ color: 'red' }}>{error}</p>}
                    </center>
                </div>
            </div>
            <div style={{ marginBottom: '30px' }}></div>
            {weatherData && (
                <>
                    <div className={style['weather-side']}>
                        <div className={style['weather-gradient']}></div>
                        <div className={style['date-container']}>
                            <h2 className={style['date-dayname']}>Now</h2>
                            <span className={style['date-day']}>{weatherData.location.localtime}</span>
                            <span className={style['location']}>
                                {weatherData.location.name}, {weatherData.location.country}
                            </span>
                        </div>
                        <div className={style['weather-container']}>
                            <img src={weatherData.current.condition.icon} alt={weatherData.current.condition.text} />
                            <span className="value">Condition: {weatherData.current.condition.text}</span>
                            <h1 className={style['weather-temp']}>{weatherData.current.temp_c}°C</h1>
                            <h3 className={style['weather-desc']}>Feelslike {weatherData.current.feelslike_c} °C</h3>
                        </div>
                    </div>
                    <div className={style['info-side']}>
                        <div className={style['today-info-container']}>
                            <div className={style['today-info']}>
                                <div className={style['precipitation']}>
                                    {' '}
                                    <span className={style['title']}>Cloud</span>
                                    <span className={style['value']}>{weatherData.current.cloud}</span>
                                    <div className={style['clear']}></div>
                                </div>
                                <div className={style['wind']}>
                                    {' '}
                                    <span className={style['title']}>Temperature</span>
                                    <span className={style['value']}>{weatherData.current.temp_f} °F</span>
                                    <div className={style['clear']}></div>
                                </div>
                                <div className={style['humidity']}>
                                    {' '}
                                    <span className={style['title']}>Feelslike</span>
                                    <span className={style['value']}>{weatherData.current.feelslike_f} °F</span>
                                    <div className={style['clear']}></div>
                                </div>
                            </div>
                        </div>
                        <div className={style['week-container']}>
                            <ul className={style['week-list']}>
                                {listWeather.map((weather) => (
                                    <li className={style['active']}>
                                        <img src={weather.day.condition.icon} alt={weather.day.condition.icon} />
                                        <span className={style['day-name']}>{weather.date}</span>
                                        <span className={style['day-temp']}>{weather.day.avgtemp_c} °C</span>
                                    </li>
                                ))}
                                <div className={style['clear']}></div>
                            </ul>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
}

export default Weather;
