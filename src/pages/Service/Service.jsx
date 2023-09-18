import cl from './Service.module.css';
import service_1 from '../../assets/services/Услуги 1.jpg';
import service_2 from '../../assets/services/Услуги 2.jpg';
import service_3 from '../../assets/services/Услуги 3.jpg';
import {ServiceItem} from "../../components/ServiceItem/SeviceItem";

export const Service = () => {
    const services = [
        {
            id: 0,
            title: "Удлинение коронковой части зуба",
            price: "5 500 ₽",
            img: service_1,
        },
        {
            id: 1,
            title: "Установка 1-го имплантата",
            price: "8 000 ₽",
            img: service_2,
        },
        {
            id: 2,
            title: "Операция синус-лифтинг (мягкий)",
            price: "15 000 ₽",
            img: service_3,
        },
    ]

    return (
        <div className={cl.service}>
            <ul className={cl.service__list}>
                {
                    services.map((service) => {
                        return (
                            <ServiceItem key={service.id} service={service}/>
                        )
                    })
                }
            </ul>
        </div>
    );
};
