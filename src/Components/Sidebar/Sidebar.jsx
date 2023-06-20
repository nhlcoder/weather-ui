import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloud, faHouse, faPlus, faUser } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

import images from '~/assets/images';
import style from './Sidebar.module.scss';
import Logout from '../Logout/Logout';


function Sidebar() {
    
    return (
        <div className={style['sidebar']}>
            <div className={style['top']}>
                <img className={'top-logo'} src={images.logo} alt="" width={'50px'} />
            </div>
            <ul className={style['sidebar-list']}>
                <li className={style['sidebar-list-item']}>
                    <Link className={style['sidebar-list-item-link']} to="/">
                        <FontAwesomeIcon className={style['icon']} icon={faHouse} />
                        <span className={style['title']}>Home</span>
                    </Link>
                </li>
                <li className={style['sidebar-list-item']}>
                    <Link className={style['sidebar-list-item-link']} to="/weather">
                        <FontAwesomeIcon className={style['icon']} icon={faCloud} />
                        <span className={style['title']}>Weather</span>
                    </Link>
                </li>
                <li className={style['sidebar-list-item']}>
                    <Link className={style['sidebar-list-item-link']} to="/userlist">
                        <FontAwesomeIcon className={style['icon']} icon={faUser} />
                        <span className={style['title']}>List</span>
                    </Link>
                </li>
                <li className={style['sidebar-list-item']}>
                    <Link className={style['sidebar-list-item-link']} to="/createuser">
                        <FontAwesomeIcon className={style['icon']} icon={faPlus} />
                        <span className={style['title']}>Create</span>
                    </Link>
                </li>
            </ul>
            <div className={style['bottom']}>
                <div className={style['bottom-logout']}>
                    <Logout/>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;
