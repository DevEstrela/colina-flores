import styles from '../Header/Header.module.css';
import { Link } from 'react-router-dom';

function Header(){
    return(
        <header className={styles.container}>
            
            <nav className={styles.containerNav}>
                    <h1>Seu Carinho com Flores</h1> 
                
                    <div className={styles.ContainerLinks}>
                        <Link to="/" className={styles.links} >Localização</Link>
                        <Link to="/" className={styles.links} >Contatos</Link>
                        <Link to="/" className={styles.links} >Coroas</Link>

                        <Link to="/" className={styles.button}>Entrar em contato</Link>

                    </div>
                    
            </nav>

        </header>
    )
}
export default Header;