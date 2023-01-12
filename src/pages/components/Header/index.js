import styles from '../Header/Header.module.css';
import logo from '../../../img/logo.png';

function Header(){
    return(
        <header className={styles.container}>
            <div className={styles.containerLogo}>
                <img alt='logo' src={logo} className={styles.logo}/>
            </div>
        </header>
    )
}
export default Header;