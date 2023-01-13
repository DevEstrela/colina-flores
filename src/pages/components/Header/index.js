import styles from '../Header/Header.module.css';
import { Link } from 'react-router-dom';

function Header(){
    return(
        <header className={styles.container}>
            
            <nav className={styles.containerNav}>
                    <h1>Seu Carinho com Flores</h1> 
                
                    <Link className={styles.ContainerLinks}>
                        <a className={styles.links} href='#'>Localização</a>
                        <a className={styles.links} href='#'>Contatos</a>
                        <a className={styles.links} href='#'>Coroas</a>

                        <a href='#zap' className={styles.button}>Entrar em contato</a>

                    </Link>
                    
            </nav>

        </header>
    )
}
export default Header;