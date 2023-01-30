import styles from '../Header/Header.module.css';
import { Link } from 'react-router-dom';

function Header(){
    return(
        <header className={styles.container}>
            
            <nav className={styles.containerNav}>
                    <h1>Sua Homenagem em Flores </h1> 
                
                    <div className={styles.ContainerLinks}>
                        <a href='https://goo.gl/maps/GjGp2VN1nbSN3XxZ9' target="_blank" className={styles.links} >Localização</a>
                        <a href='https://colinadosipes.com.br/'className={styles.links} >Grupo Colina</a>
                        <a href='https://wa.me/5511951534222' target="_blank" className={styles.button}>Entrar em contato</a>

                    </div>
                    
            </nav>

        </header>
    )
}
export default Header;