import styles from '../Logo/Logo.module.css'
import logo from '../../../img/logo.png';

function Logo(){
    return(
        <section className={styles.containerLogo}>
            <img alt='Logo Flores' src={logo} className={styles.logo}/>
        </section>
    )
}

export default Logo;