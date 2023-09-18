import cl from './Header.module.css'
import logoIMG from '../../assets/med.jpg'
import {Link, useLocation} from "react-router-dom";
import {ArrowBack} from "../../assets/icons/icons";


// тебе нужно вставить в img href="url" логотипа, пока оставлю рандом
export const Header = () => {
    const location = useLocation();

    return (
        <header className={cl.header}>
            {
                location.pathname !== '/'
                    ?
                    <Link className={cl.header__back} to="/"><ArrowBack/></Link>
                    :
                    null
            }
            {
                location.pathname === '/' ?
                    <img src={logoIMG} className={cl.header__img} alt="Логотип Стомус"/> :
                    null
            }
            {
                location.pathname === '/master' ?
                    <p className={cl.header__img}>Выберите мастера</p> : null
            }
            {
                location.pathname === '/date' ?
                    <p className={cl.header__img}>Выберите дату и время</p> : null
            }
            {
                location.pathname === '/service' ?
                    <p className={cl.header__img}>Выберите услугу</p> : null
            }
            {
                location.pathname === '/address' ?
                    <p className={cl.header__img}>Выберите адрес</p> : null
            }
            {
                location.pathname === '/book-service' ?
                    <p className={cl.header__img}>Заполните данные</p> : null
            }
            {
                location.pathname === '/success' ?
                    <p className={cl.header__img}>Инфо о записи</p> : null
            }
        </header>
    );
};

