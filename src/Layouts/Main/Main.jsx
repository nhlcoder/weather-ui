import { Footer, Header } from '../Components';
import style from './Main.module.scss';
function Main({ children }){
    return(
        <div className={style['wrapper']}>
            <div className={style['navbar']}>
                Navbar
            </div>
            <div className={style['content']}>
                <header className={style['header']}>
                    <Header/>
                </header>
                <div className={style['children']}>
                    {children}
                </div>
                <footer className={style['footer']}>
                    <Footer/>
                </footer>
                </div>
        </div>
    )
}

export default Main;