import {Header} from "../components/Header/Header";
import {Outlet} from "react-router-dom";

export const Layout = () => {
    return (
        <div>
            <Header/>
            <main style={{"padding": "0px 10px"}}>
                <Outlet/>
            </main>
        </div>
    );
};
