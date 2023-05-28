import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faMicrophone } from '@fortawesome/free-solid-svg-icons';
import style from './Search.module.scss';
import { useEffect } from 'react';

const Search = () => {
    useEffect(() => {}, []);
    return (
        <div className={style['search-form']}>
            <button className={style['search']}>
                <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
            <input type="text" placeholder="Search" className={style['input']} />
            <button className={style['mic']}>
                <FontAwesomeIcon icon={faMicrophone} />
            </button>
        </div>
    );
};

export default Search;
