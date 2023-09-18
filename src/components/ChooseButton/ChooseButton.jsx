import cl from './ChooseButton.module.css';
import {Link} from "react-router-dom";

export const ChooseButton = ({text, href, icon}) => {
    return (
        <Link to={href} className={cl.choose_button}>
           {icon} <span>{text}</span>
        </Link>
    );
};
