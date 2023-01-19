import styles from '../Infos/Infos.module.css';
import boton from '../../../../img/footer/boton.png'
import local from '../../../../img/footer/local.png';
import wpp from '../../../../img/footer/wpp.png';
import email from '../../../../img/footer/email.png';
import send from '../../../../img/footer/send.png'
import { Link } from 'react-router-dom';


function Infos(){
    return(
        <section className={styles.container}>

<nav className={styles.containerNav}>
                <h4>Contatos</h4>
                    <div>
                        <img src={send} /> <Link to="/" className={styles.links}>Inicio</Link>
                    </div>
                    
                    <div>
                        <img src={send} /> <Link to="/" className={styles.links}>Blog</Link>
                    </div>
                    
                    <div>
                        <img src={send} /> <Link to="/" className={styles.links}>Trabale Conosco</Link>
                    </div>
                                    
            </nav>
            <nav className={styles.containerNav}>
                <h4>Contatos</h4>
                    <div>
                        <img src={send} /> <Link to="/" className={styles.links}>Funerário</Link>
                    </div>
                    
                    <div>
                        <img src={send} /> <Link to="/" className={styles.links}>Cremação</Link>
                    </div>
                    
                    <div>
                        <img src={send} /> <Link to="/" className={styles.links}>Linklanos</Link>
                    </div>
                                    
            </nav>

            <nav className={styles.containerNav}>
                <h4>Contatos</h4>
                    <div>
                        <img src={local} /> <p>(11) 4746-7777</p>
                    </div>
                    
                    <div>
                        <img src={email} /> <p>colinadosipes@gmail.com</p>
                    </div>
                    
                    <div>
                        <img src={wpp} /> <p>(11) 9 58584-747</p>
                    </div>
                                    
            </nav>

            <div>
                <img src={boton} />
            </div>
        </section>
    )
}
export default Infos;