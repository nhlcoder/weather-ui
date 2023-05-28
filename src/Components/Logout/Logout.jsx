import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

import style from './Logout.module.scss';

const storage = {
    set(key, value) {
        localStorage.setItem(key, JSON.stringify(value));
    },
    get(key) {
        return JSON.parse(localStorage.getItem(key));
    },  
};

function Logout() {
    const navigate = useNavigate();
    const HandleLogout = () => {
        storage.set('isLogin', false);
        navigate('/');
        window.location.reload();
    };
    return (
        <button className={style['logout']} onClick={HandleLogout}>
            <FontAwesomeIcon className={style['icon']} icon={faRightFromBracket} />
        </button>
    );
}
export default Logout;
