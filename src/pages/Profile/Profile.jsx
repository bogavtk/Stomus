import cl from './Profile.module.css';
import {TelegramIcon} from "../../assets/icons/icons";

export const Profile = () => {
    const userName = "@Probirochniy";

    return (
        <div className={cl.profile}>
            <h4>
                <span className={cl.profile__username}>
                    <TelegramIcon/> Пользователь:
                </span>
                <span>{userName}</span>
            </h4>
            <hr />
            <h2>История посещений</h2>
            <div className={cl.mobileTable}>
                <table className={cl.visitsTable}>
                    <thead>
                    <tr>
                        <th>Дата</th>
                        <th>Время</th>
                        <th>Специалист</th>
                        <th>Стоимость</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>18.03</td>
                        <td>14:30</td>
                        <td>Врач</td>
                        <td>1000 руб.</td>
                    </tr>
                    <tr>
                        <td>17.03</td>
                        <td>10:00</td>
                        <td>Стоматолог</td>
                        <td>1500 руб.</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};
