import style from '../css.modules/mainPage.module.css';
import NavigationBar from "../components/NavigationBar";

const MainPage = () => {
    return (
        <div className={style.main}>
            <div><NavigationBar/></div>
        </div>
    );
};

export default MainPage;