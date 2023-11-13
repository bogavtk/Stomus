import cl from './Service.module.css';
import service_1 from '../../assets/services/услуга1.png';
import service_2 from '../../assets/services/услуга2.png';
import service_3 from '../../assets/services/услуга3.png';
import {ServiceItem} from "../../components/ServiceItem/SeviceItem";
import {Link} from "react-router-dom";

export const Service = () => {
    const services = [
        {
            id: 0,
            title: "Все услуги",
            img: service_1,
            link: '/allService',
        },
        {
            id: 1,
            title: "Акции",
            img: service_2,
            link: '/ac',
        },
        {
            id: 2,
            title: "Обучение",
            img: service_3,
            link: '/learn'
        },
    ]

    return (
        <div className={cl.service}>
            <ul className={cl.service__list}>
                {
                    services.map((service) => {
                        return (
                            <ServiceItem
                                key={service.id}
                                service={service}

                            />
                        )
                    })
                }
            </ul>
            {/*<Link className={cl.service__back_button_wrap} to="/" >Перейти назад</Link>*/}
        </div>
    );
};
