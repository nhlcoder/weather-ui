import style from './Home.module.scss';
function Home() {
    return (
        <div className={style['content']}>
            <div className={style['wrapper']}>
                <div className={style['sun']}></div>
                <div className={style['cloud']}>
                    <div className={style['cloud1']}>
                        <ul>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                        </ul>
                    </div>
                    <div className={style['cloud1 c_shadow']}>
                        <ul>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                        </ul>
                    </div>
                </div>

                <div className={style['cloud_s']}>
                    <div className={style['cloud1']}>
                        <ul>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                        </ul>
                    </div>
                    <div className={style['cloud1 c_shadow']}>
                        <ul>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                        </ul>
                    </div>
                </div>

                <div className={style['cloud_vs']}>
                    <div className={style['cloud1']}>
                        <ul>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                        </ul>
                    </div>
                    <div className={style['cloud1 c_shadow']}>
                        <ul>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                        </ul>
                    </div>
                </div>
                <div className={style['haze']}></div>
                <div className={style['haze_stripe']}></div>
                <div className={style['haze_stripe']}></div>
                <div className={style['haze_stripe']}></div>
                <div className={style['thunder']}></div>
                <div className={style['rain']}>
                    <ul>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                </div>
                <div className={style['sleet']}>
                    <ul>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                </div>
                <div className={style['text']}>
                    <ul>
                        <li>Mostly Sunny</li>
                        <li>Partly Sunny</li>
                        <li>Partly Cloudy</li>
                        <li>Mostly Cloudy</li>
                        <li>Cloudy</li>
                        <li>Hazy</li>
                        <li>Thunderstorm</li>
                        <li>Rain</li>
                        <li>Sleet</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Home;
