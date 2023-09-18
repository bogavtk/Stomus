import React, { useState, useEffect } from 'react';
import cl from './ServiceItem.module.css';
import classNames from "classnames";

export const ServiceItem = ({ service }) => {
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        // Получаем текущий список активных услуг из localStorage
        const storedServicesJSON = localStorage.getItem('servicesList');
        const storedServices = JSON.parse(storedServicesJSON);

        // Проверяем, есть ли текущая услуга в списке активных
        const isServiceActive = storedServices?.some((storedService) => storedService.service === service.id);

        // Устанавливаем состояние активности
        setIsActive(isServiceActive);
    }, [service.id]);

    const handleCardClick = () => {
        if (isActive) {
            // Если карточка уже активна, удаляем ее из localStorage
            // и снимаем состояние активности
            setIsActive(false);
            const storedServicesJSON = localStorage.getItem('servicesList');
            const storedServices = JSON.parse(storedServicesJSON);
            const updatedServices = storedServices.filter((storedService) => storedService.service !== service.id);
            localStorage.setItem('servicesList', JSON.stringify(updatedServices));
        } else {
            // Если карточка не активна, добавляем ее в localStorage
            // и устанавливаем состояние активности
            setIsActive(true);
            const storedServicesJSON = localStorage.getItem('servicesList');
            const storedServices = JSON.parse(storedServicesJSON) || [];
            const updatedServices = [
                ...storedServices,
                { service: service.id, title: service.title, price: service.price },
            ];
            localStorage.setItem('servicesList', JSON.stringify(updatedServices));
        }
    };

    const backgroundStyle = {
        backgroundImage: `url('${service.img}')`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '90% 50%',
    };

    return (
        <section
            style={backgroundStyle}
            className={classNames(cl.service_item, {[cl.active]: isActive})}
            onClick={handleCardClick}
        >
            <h4>{service.title}</h4>
            <p>{service.price}</p>
        </section>
    );
};
