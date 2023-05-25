import style from './Main.module.scss';
function Main({ children }) {
    return (
        <div className={style['wrapper']}>
            {children}
        </div>
    );
}

export default Main;
