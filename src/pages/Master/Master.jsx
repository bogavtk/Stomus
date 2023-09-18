import cl from './Master.module.css';
import {MasterIcon} from "../../assets/icons/icons";
import {ChooseMaster} from "../../components/ChooseMaster/ChooseMaster";
import Logo from '../../assets/chel.jpg';
export const Master = () => {
    const mastersData = [
        {
            img: Logo,
            name: "Ильдар",
            nearestBookDate: "21 сентября",
            masterTitle: "Врач стоматолог-терапевт",
            stars: 5,
            timeToBook: [
                '20:00',
                '20:15',
                '20:20',
            ]
        },
        {
            img:Logo,
            name: "Самир",
            nearestBookDate: "сегодня",
            masterTitle: "Врач стоматолог-хирург",
            stars: 4,
            timeToBook: [
                '11:30',
                '13:15',
                '15:20',
            ]
        },

    ]

    return (
        <section className={cl.master}>
            <button className={cl.master__anyone}>
                <MasterIcon/> Любой свободный специалист
            </button>
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

