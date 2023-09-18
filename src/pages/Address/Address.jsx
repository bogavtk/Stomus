import cl from './Address.module.css';
import { AddressIcon } from '../../assets/icons/icons';
import classNames from 'classnames';
import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

export const Address = () => {
    const [chosenAddress, setChosenAddress] = useState('');
    const [chosenAddressId, setChosenAddressId] = useState('');

    const addressRef = useRef();

    const navigate = useNavigate();

    const handleAddressSubmit = function () {
        localStorage.setItem('chosenPlace', chosenAddress);
        navigate('/');
    };

    const addresses = [
        {
            id: 1,
            city: 'Kazan',
            street: 'Kremlevskaya',
            house: 35,
        },
        {
            id: 2,
            city: 'Innopolis',
            street: 'Centralnaya',
            house: 1,
        },
    ];

    const handleAddressClick = (address) => {
        setChosenAddress(`г.${address.city}, ул. ${address.street}, д. ${address.house}`);
        setChosenAddressId(address.id);

        // Добавляем класс "focused" при клике на элемент
        addressRef.current.classList.add(cl.active);
    };

    const handleBlur = () => {
        // Удаляем класс "focused" при потере фокуса
        addressRef.current.classList.remove(cl.active);
    };

    return (
        <ul className={cl.addresses}>
            {addresses.map((address) => {
                return (
                    <li
                        key={address.id}
                        ref={addressRef}
                        onClick={() => handleAddressClick(address)} // Вызываем функцию при клике
                        onBlur={handleBlur} // Вызываем функцию при потере фокуса
                        className={classNames(cl.address, {
                            [cl.active]: address.id === chosenAddressId,
                        })}
                    >
                        <div className={cl.address_text}>
                            <p>Город: {address.city}</p>
                            <p>Улица: {address.street}</p>
                            <p>Дом: {address.house}</p>
                        </div>
                        <span>
              <AddressIcon />
            </span>
                    </li>
                );
            })}
            <button className={cl.address__confirm_button} onClick={handleAddressSubmit}>
                Подтвердить
            </button>
        </ul>
    );
};
