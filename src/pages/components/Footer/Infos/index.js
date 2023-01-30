import styles from '../Infos/Infos.module.css';
import boton from '../../../../img/footer/boton.png'
import email from '../../../../img/footer/email.png';
import send from '../../../../img/footer/send.png'


function Infos(){
    return(
        <section className={styles.container}>

            <nav className={styles.containerNav}>
                <h4>Paginas</h4>
                    <div>
                        <img src={send} /> <a>Inicio</a>
                    </div>
                    
                    <div>
                        <img src={send} /> <a   href='https://colinadosipes.com.br/' target="_blank">Blog</a>
                    </div>
                    
                    <div>
                        <img src={send} /> <a   href='https://grupocolina.solides.jobs/' target="_blank">Trabalhe Conosco</a>
                    </div>
         
                    
            </nav>
            
            <nav className={styles.containerNav}>
                <h4>Serviços</h4>
                    <div>
                        <img src={send} /> <a   href='https://colinadosipes.com.br/jazigo/' target="_blank">Jazigo</a>
                    </div>
                    
                    <div>
                        <img src={send} /> <a   href='https://colinadosipes.com.br/cremacao/' target="_blank">Cremação</a>
                    </div>
                    
                    <div>
                        <img src={send} /> <a   href='https://colinadosipes.com.br/plano-funerario/' target="_blank">Planos</a>
                    </div>
                                    
            </nav>

            <nav className={styles.containerNav}>
                <h4>Contatos</h4>
                    <div>
                        <img src={send} /> <a href='https://criarmeulink.com.br/u/1674159251' target="_blank">(11) 4746-7777</a>
                    </div>
                    
                    <div>
                        <img src={email} /> <p>flores@gmail.com.br</p>
                    </div>                                    
            </nav>
            <div>
                <img alt='' className={styles.imgQualidade} src={boton} />
            </div>
        </section>
    )
}
export default Infos;