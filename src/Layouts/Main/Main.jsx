import style from './Main.module.scss';
import { Header, Sidebar } from '~/Components';
import { useEffect, useState } from 'react';

const Main = ({ children }) => {
    const [opacity, setOpaciity] = useState(1);
    const [showSidebar, setShowSidebar] = useState(true);

    const HandleScroll = () => {
        const newOpacity = 1 - window.scrollY / 50;
        setOpaciity(newOpacity < 0 ? 0 : newOpacity);
    };

    const handleResize = () => {
        const show = window.innerWidth > 700;
        setShowSidebar(show);
    };

    useEffect(() => {
        window.addEventListener('scroll', HandleScroll);
        window.addEventListener('resize', handleResize);
        handleResize();
        return () => {
            window.removeEventListener('scroll', HandleScroll);
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div className={showSidebar ? style['wrapper'] : ''}>
            {showSidebar && (
                <div className={style['sidebar']}>
                    <Sidebar />
                </div>
            )}
            <div className={style['main']}>
                <div className={style['header']} style={{ opacity }}>
                    <Header />
                </div>
                <div className={style['content']}>
                    {children}
                </div>
            </div>
        </div>
    );
};
export default Main;
