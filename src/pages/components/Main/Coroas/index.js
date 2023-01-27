import styles from './Coroas.module.css';
import coroa1 from '../../../../img/coroas/coroa1.png'
import coroa2 from '../../../../img/coroas/coroa2.png'
import coroa3 from '../../../../img/coroas/coroa3.png'
import coroa4 from '../../../../img/coroas/coroa4.png'
import coroa5 from '../../../../img/coroas/coroa5.png'
import coroa6 from '../../../../img/coroas/coroa6.png'
import coroa7 from '../../../../img/coroas/coroa7.png'
import coroa8 from '../../../../img/coroas/coroa8.png'

function Coroas(){
    return(
        
        <section className={styles.container}>
            <div className={styles.oferta}>
                <h1>Ofertas 10% OFF</h1>
            </div>
            <div className={styles.containerElements}>
                <div>
                    <img alt="coroa de rosas" src={coroa1}/>
                    <h3>Coroa de rosas</h3>
                    <p>de R$ 120,00</p>
                    <h5>por R$ 90,00</h5>

                </div>

                <div>
                    <img src={coroa2} alt="coroa de rosas"/>
                    <h3>Coroa de rosas</h3>
                    <p> de R$ 120,00</p>
                    <h5>por R$ 90,00</h5>

                </div>
                
                <div>
                    <img src={coroa3} alt="coroa de rosas"/>
                    <h3>Coroa de rosas</h3>
                    <p>de R$ 120,00</p>
                    <h5>por R$ 90,00</h5>

                </div>

                <div>
                    <img src={coroa4} alt="coroa de rosas"/>
                    <h3>Coroa de rosas</h3>
                    <p>de R$ 120,00</p>
                    <h5>por R$ 90,00</h5>

                </div>
            </div>

            <div className={styles.containerElements}>
                <div>
                    <img alt="coroa de rosas" src={coroa5}/>
                    <h3>Coroa de rosas</h3>
                    <p>de R$ 120,00</p>
                    <h5>por R$ 90,00</h5>

                </div>

                <div>
                    <img src={coroa6} alt="coroa de rosas"/>
                    <h3>Coroa de rosas</h3>
                    <p> de R$ 120,00</p>
                    <h5>por R$ 90,00</h5>

                </div>
                
                <div>
                    <img src={coroa7} alt="coroa de rosas"/>
                    <h3>Coroa de rosas</h3>
                    <p>de R$ 120,00</p>
                    <h5>por R$ 90,00</h5>

                </div>

                <div>
                    <img src={coroa8} alt="coroa de rosas"/>
                    <h3>Coroa de rosas</h3>
                    <p>de R$ 120,00</p>
                    <h5>por R$ 90,00</h5>

                </div>
            </div>
           
        </section>
    )
}
export default Coroas;