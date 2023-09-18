import cl from './Success.module.css';
import {Link} from "react-router-dom";
export const Success = () => {
    const storedServicesJSON = localStorage.getItem('servicesList');
    const storedServices = JSON.parse(storedServicesJSON);

    return (
        <>
            <section className={cl.success}>
                <h2>Вы записаны</h2>
                <hr/>
                <div className={cl.success__info}>
                    <p>{`${localStorage.getItem('currentDay')} 
                    ${localStorage.getItem('currentMonth')} 
                    в ${localStorage.getItem('currentTime')}`}</p>
                    <p>{`К специалисту: ${localStorage.getItem('chosenMaster')}`}</p>
                </div>
                <hr/>
                <h4>Услуги:</h4>
                <ul>{
                    storedServices?.map((service) => {
                        return (
                            <li key={service.service}>
                                <p>{service.title}</p>
                                <p>{service.price}</p>
                            </li>
                        )
                    })
                }
                </ul>

                <hr/>

                <p className={cl.success__total}><span>Итого:</span> {storedServices?.reduce((accumulator, service) => {
                    const price = parseFloat(service.price
                        .replace(/\s+/g, '')
                        .replace(',', '.'));
                    return accumulator + price;
                }, 0)}</p>


            </section>
            <Link to='/'>
                <button onClick={() => localStorage.clear()} className={cl.success__back_button}>
                    Вернуться назад
                </button>
            </Link>
        </>
    );
};
