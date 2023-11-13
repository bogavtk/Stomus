import cl from './Home.module.css';
import action from '../../assets/action.jpg'
import {ChooseButton} from "../../components/ChooseButton/ChooseButton";
import {Date, MasterIcon, Service, AddressIcon} from "../../assets/icons/icons";
import {Link} from "react-router-dom";


export const Home = () => {
    const myPoints = 1000;
    //переделываем под PROSugar
    return (
        <div className={cl.home}>
            <section className={cl.home__action}>

            </section>
            {/*<section className={cl.home__points}>*/}
            {/*    <p>Мои баллы: <span>{myPoints}</span></p>*/}
            {/*</section>*/}
            {
                localStorage.getItem('currentDay') ?
                    <ChooseButton
                        text={`${localStorage.getItem('currentDay')}  
                        ${localStorage.getItem('currentMonth')} в
                    ${localStorage.getItem('currentTime')}`}
                        href="/date"
                        icon={<Date/>}/>
                    :
                    <ChooseButton text="Выберете дату" href="/date" icon={<Date/>}/>
            }

            {   localStorage.getItem('chosenPlace') ?
                <ChooseButton text={`${localStorage.getItem('chosenPlace')}`} href="/address" icon={<AddressIcon/>} />
                :
                <ChooseButton text="Выберите адрес" href="/address" icon={<AddressIcon/>} />
            }

            {localStorage.getItem('chosenMaster') ?
                <ChooseButton text={`Выбран мастер: ${localStorage.getItem('chosenMaster')}`} href="/master" icon={<MasterIcon/>}/>
            :
                <ChooseButton text="Выберите мастера" href="/master" icon={<MasterIcon/>}/>
            }

            {
                localStorage.getItem('servicesList') ?
                    <ChooseButton text="Выбрано уже несколько услуг"
                                  href="/service"
                                  icon={<Service/>}/>
                    :
                    <ChooseButton
                        text="Выберите услугу"
                        href="/service"
                        icon={<Service/>}/>
            }


            <Link to='/book-service' className={cl.home__book_button}>Оставить заявку</Link>
        </div>
    );
};
