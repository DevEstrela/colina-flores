import styles from '../Infos/Infos.module.css';
import boton from '../../../../img/footer/boton.png'

function Infos(){
    return(
        <section className={styles.container}>

            <nav>
                <h4>Paginas</h4>
                <img src={} /> <p></p>
                <img src={} /> <p></p>
                <img src={} /> <p></p>
            </nav>

            <nav>
                <h4>Serviços</h4>
                <img src={} /> <p></p>
                <img src={} /> <p></p>
                <img src={} /> <p></p>
            </nav>

            <nav>
                <h4>Contatos</h4>
                <img src={} /> <p></p>
                <img src={} /> <p></p>
                <img src={} /> <p></p>
            </nav>

            <div>
                <img src={boton} />
            </div>
        </section>
    )
}
export default Infos;