import style from '../css.modules/NavigationBar.module.css';

const NavigationBar = () => {
    return (
       <>
       <div className={style.con}>
        <img src="../images/logo.png" alt="" />
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
            <a href='/'>Login ➜]</a>
        </div>
       </div>
       </>
    );
}
export default NavigationBar;