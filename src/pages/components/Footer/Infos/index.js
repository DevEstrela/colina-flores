import styles from '../Infos/Infos.module.css';
import boton from '../../../../img/footer/boton.png'
import local from '../../../../img/footer/local.png';
import wpp from '../../../../img/footer/wpp.png';
import email from '../../../../img/footer/email.png';
import send from '../../../../img/footer/send.png'


function Infos(){
    return(
        <section className={styles.container}>

<nav className={styles.containerNav}>
                <h4>Contatos</h4>
                    <div>
                        <img src={send} /> <a>Inicio</a>
                    </div>
                    
                    <div>
                        <img src={send} /> <a   href='https://colinadosipes.com.br/' target="_blank">Blog</a>
                    </div>
                    
                    <div>
                        <img src={send} /> <a   href='https://grupocolina.solides.jobs/' target="_blank">Trabale Conosco</a>
                    </div>
         
                    
            </nav>
            <nav className={styles.containerNav}>
                <h4>Contatos</h4>
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
                        <img src={email} /> <p>colinadosipes@gmail.com</p>
                    </div>
                    
                    <div>
                        <img src={wpp} /> <a href='https://wa.me/5511951534222' target="_blank">(11) 9 5153-4222</a>
                    </div>
                                    
            </nav>

            <div>
                <img src={boton} />
            </div>
        </section>
    )
}
export default Infos;