import cl from './Master.module.css';
import {ChooseMaster} from "../../components/ChooseMaster/ChooseMaster";
import Logo from '../../assets/masterLogo.png';
export const Master = () => {
    const mastersData = [
        {
            img: Logo,
            name: "Кравченко Оксана Александровна",
            level: 'Топ мастер',
            experience: 9,
        },
        {
            img: Logo,
            name: "Кравченко Оксана Александровна",
            level: 'Топ мастер',
            experience: 9,
        },

    ]

    return (
        <section className={cl.master}>

            <div className={cl.master__list}>
            {
                mastersData.map((master, index) => {
                    return (
                        <ChooseMaster key={index} master={master}/>
                    )
                })
            }
            </div>
        </section>
    );
};

