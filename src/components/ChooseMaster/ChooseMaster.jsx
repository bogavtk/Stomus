import cl from './ChooseMaster.module.css';
import {ArrowAccordion} from "../../assets/icons/icons";
import {useState} from "react";
import classNames from "classnames";
import {ChooseButton} from "../ChooseButton/ChooseButton";


export const ChooseMaster = ({master}) => {

    const [visibleInfo, setVisibleInfo] = useState(false)

    return (
        <section className={cl.master_item} onClick={() => {
            setVisibleInfo(!visibleInfo)
        }}>
            <div className={cl.mainBlock}>
                <div className={cl.master_item__title}>
                    <img
                        className={cl.master_item__img}
                        src={master.img}
                        alt={`Изображение мастера ${master.name}`}
                    />
                    <div className={cl.master_item__info}>
                        <span className={cl.nameMaster}>{master.name}</span>
                        {
                            visibleInfo
                                ?
                                <div className={cl.detailInfo}>
                                    <p>Квалификация: {master.level}</p>
                                    <p>Стаж: {master.experience} лет</p>
                                </div>
                                :
                                ''
                        }
                    </div>
                </div>
                <button
                    className={classNames({
                        [cl.open]: visibleInfo,
                        [cl.close]: !visibleInfo
                    })}>
                    <ArrowAccordion/>
                </button>
            </div>

            {
                visibleInfo
                    ?
                    <div className={cl.wrappButton}>
                        <ChooseButton text={'Выбрать'}/>
                    </div>
                    :
                    ''
            }


        </section>
    );
};
