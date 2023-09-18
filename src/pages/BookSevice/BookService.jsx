import cl from './BookService.module.css';
import { useState } from 'react';
import {useNavigate} from "react-router-dom";

export const BookService = () => {
    const [username, setUsername] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');

    const navigate = useNavigate();

    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            // const response = await fetch('https://google.com');
            navigate('/success')

        }catch(err){
            setError('Упс...Что-то пошло не так, мы разбираемся')
        }
    }

    return (
        <main className={cl.book}>
            <h4>Осталось совсем немного...</h4>
            <p>Укажите ваши данные, чтобы закончить запись</p>
            {error && <p className={cl.reqError}>{error}</p>}

            <form className={cl.book__form} onSubmit={handleSubmit}>
                <input
                    className={cl.book__form_input}
                    type="text"
                    placeholder="Ваше имя"
                    value={username}
                    onChange={
                    (e) =>
                        setUsername(e.target.value)}
                />
                <input
                    className={cl.book__form_input}
                    type="text"
                    placeholder="Номер телефона"
                    value={phoneNumber}
                    onChange={
                    (e) =>
                        setPhoneNumber(e.target.value)}
                />

                <button
                    className={cl.button_submit}
                    type="submit"> Записаться </button>
            </form>
        </main>
    );
};
