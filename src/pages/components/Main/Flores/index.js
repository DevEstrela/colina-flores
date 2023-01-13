import styles from './Flores.module.css';
import coroa1 from '../../../../img/coroas/coroa1.png'
function Flores(){
    return(
        <section className={styles.container}>
            <div className={styles.elements}>
                <img className={styles.coroas} src={coroa1}/>
                <p>Coroa de rosas</p>
                <p>de R$ 120,00</p>
                <p>por R$ 90,00</p>

            </div>

            <div className={styles.elements}>
                <img className={styles.coroas} src={coroa1}/>
                <p>Coroa de rosas</p>
                <p>de R$ 120,00</p>
                <p>por R$ 90,00</p>

            </div>
            
            <div className={styles.elements}>
                <img className={styles.coroas} src={coroa1}/>
                <p>Coroa de rosas</p>
                <p>de R$ 120,00</p>
                <p>por R$ 90,00</p>

            </div>

            <div className={styles.elements}>
                <img className={styles.coroas} src={coroa1}/>
                <p>Coroa de rosas</p>
                <p>de R$ 120,00</p>
                <p>por R$ 90,00</p>

            </div>
        </section>
    )
}
export default Flores;