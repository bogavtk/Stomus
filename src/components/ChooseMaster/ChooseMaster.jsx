import cl from './ChooseMaster.module.css';


export const ChooseMaster = ({master}) => {

    return (
        <section className={cl.master_item}>
            <div className={cl.master_item__title}>
                <img
                    className={cl.master_item__img}
                    src={master.img}
                    alt={`Изображение мастера ${master.name}`}
                />
                <div className={cl.master_item__info}>
                    <p>{master.masterTitle}</p>
                    <h4>{master.name}</h4>
                    <p>Оценка работы специалиста: {master.stars} / 5</p>
                </div>
            </div>
            <p>Ближайшее время для записи на {master.nearestBookDate}:</p>
            <ul className={cl.master_item__time}>
                {master.timeToBook.map((time, index) => {
                    return (
                        <li key={index}
                            onClick={() => {
                                localStorage.setItem('currentTime', time)
                                localStorage.setItem('chosenMaster', master.name)
                            }
                        }
                        >{time}</li>
                    )
                })}
            </ul>
        </section>
    );
};
