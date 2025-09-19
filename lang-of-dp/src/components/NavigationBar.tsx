import style from '../css.modules/NavigationBar.module.css';

const NavigationBar = () => {
    return (
       <>
       <div className={style.con}>
        <img src="../../logo.png" alt="" />
        <div className={style.navBar}>
            <ul>
                <li>
                    <a href="/">Languages</a>
                </li>
                 <li>
                    <a href="/">Certification</a>
                </li>
                 <li>
                    <a href="/">For companies</a>
                </li>
                 <li>
                    <a href="/">For startups</a>
                </li>
                 <li>
                    <a href="/">Profiles</a>
                </li>
            </ul>
        </div>
        <div className={style.btnCon}>
            <button className={style.dp}>DP Handbook</button>
            <button className={style.up}>Upcoming classes</button>
        </div>
        <div className={style.log}>
            <p>Login</p>
        </div>
       </div>
       </>
    );
}
export default NavigationBar;