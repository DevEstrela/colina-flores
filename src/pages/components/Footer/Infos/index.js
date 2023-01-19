import styles from '../Infos/Infos.module.css';
import boton from '../../../../img/footer/boton.png'
import face from '../../../../img/footer/face.png';
import insta from '../../../../img/footer/insta.png';
import linke from '../../../../img/footer/linke.png';
import send from '../../../../img/footer/send.png'


function Infos(){
    return(
        <section className={styles.container}>

            <nav>
                <h4>Paginas</h4>
                <img src={send} /> <p>Inicio</p>
                <img src={send} /> <p>Blog</p>
                <img src={send} /> <p>Trabalhe Conosco</p>
            </nav>

            <nav>
                <h4>Serviços</h4>
                <img src={send} /> <p>Funerario</p>
                <img src={send} /> <p>Cremação</p>
                <img src={send} /> <p>Planos</p>
            </nav>

            <nav>
                <h4>Contatos</h4>
                <img src={send} /> <p>(11) 4746-7777</p>
                <img src={send} /> <p>colinadosipes@gmail.com</p>
                <img src={send} /> <p>(11) 9 58584-747</p>
            </nav>

            <div>
                <img src={boton} />
            </div>
        </section>
    )
}
export default Infos;