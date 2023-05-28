import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloud, faHouse } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

import React, { useState } from 'react';
import { Avatar, Modal } from 'antd';
import images from '~/assets/images';
import style from './Modal.module.scss';
import Logout from '../Logout/Logout';

const ModalPopup = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    return (
        <>
            <Avatar onClick={showModal} className={style['button-modal']} src={images.avatar} />
            <Modal title="Menu" open={isModalOpen} footer={[]} onCancel={handleCancel} width={'35vw'}>
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
                                <FontAwesomeIcon className={style['icon']} icon={faCloud} />
                                <span className={style['title']}>List</span>
                            </Link>
                        </li>
                        <li className={style['sidebar-list-item']}>
                            <Link className={style['sidebar-list-item-link']} to="/createuser">
                                <FontAwesomeIcon className={style['icon']} icon={faCloud} />
                                <span className={style['title']}>Create</span>
                            </Link>
                        </li>
                        <li className={style['sidebar-list-item']}>
                            <div className={style['sidebar-list-item-logout']}>
                                {' '}
                                <Logout />
                            </div>
                        </li>
                    </ul>
                </div>
            </Modal>
        </>
    );
};

export default ModalPopup;
