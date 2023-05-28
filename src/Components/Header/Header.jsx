import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

import style from './Header.module.scss';
import Search from '~/Components/Search/Search';
import { Modal } from '..';

function Header() {
    return (
        <header className={style['header']}>
            <div className={style['headerLeft']}></div>
            <div className={style['headerMid']}>
                <ul className={style['ul']}>
                    <li className={style['li']}>
                        <Search />
                    </li>
                </ul>
            </div>
            <div className={style['headerRight']}>
                <ul className={style['ul']}>
                    <Modal />
                    <Link className={style['ul-link']} to={'/newpage'}>
                        <FontAwesomeIcon icon={faBell} />
                    </Link>
                </ul>
            </div>
        </header>
    );
}

export default Header;
