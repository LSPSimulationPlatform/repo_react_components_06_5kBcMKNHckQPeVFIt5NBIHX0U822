import style from '../css.modules/mainPage.module.css';
import NavigationBar from "../components/NavigationBar";

const MainPage = () => {
    return (
        <div className={style.main}>
            <div><NavigationBar/></div>
            <div className={style.con1}>
                <div className={style.contactUs}>
                    <p className={style.head}>Up to 60% of success in Digital Product Development depends on a Agile Communication </p>
                    <p className={style.paragraph}>The language of Digital Product Creates a Structured & Standardized Terminologies for easy Implementation of Agile Communication</p>
                    <button className={style.contactUsBtn}>Contact us</button>
                </div>
                <div className={style.image1}>
                    <img className={style.image} src="../images/image1.png" alt="" />
                </div>
            </div>
        </div>
    );
};

export default MainPage;