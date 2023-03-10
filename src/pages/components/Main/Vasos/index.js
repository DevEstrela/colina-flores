import styles from './Vasos.module.css';
import vaso1 from '../../../../img/vasos/vaso1.png'
import vaso2 from '../../../../img/vasos/vaso2.png'
import vaso3 from '../../../../img/vasos/vaso3.png'
import vaso4 from '../../../../img/vasos/vaso4.png'
import vaso5 from '../../../../img/vasos/vaso5.png'
import vaso6 from '../../../../img/vasos/vaso6.png'
import vaso7 from '../../../../img/vasos/vaso7.png'
import vaso8 from '../../../../img/vasos/vaso8.png'
function Vasos(){
    return(
        
        <section className={styles.container}>
            <div className={styles.oferta}>
                <h1>Arranjos</h1>
            </div>
            <div className={styles.containerElements}>
                <div>
                    <img alt="vasos" src={vaso1}/>
                    {/* <h3>Vaso de lirios</h3>
                    <p>de R$ 120,00</p>
                    <h5>por R$ 90,00</h5> */}

                </div>

                <div>
                    <img src={vaso2} alt="vasos"/>
                    {/* <h3>Vaso de lirios</h3>
                    <p> de R$ 120,00</p>
                    <h5>por R$ 90,00</h5> */}

                </div>
                
                <div>
                    <img src={vaso3} alt="vasos"/>
                    {/* <h3>Vaso de lirios</h3>
                    <p>de R$ 120,00</p>
                    <h5>por R$ 90,00</h5> */}

                </div>

                <div>
                    <img src={vaso4} alt="vasos"/>
                    {/* <h3>Vaso de lirios</h3>
                    <p>de R$ 120,00</p>
                    <h5>por R$ 90,00</h5> */}

                </div>
            </div>

            <div className={styles.containerElements}>
                <div >
                    <img alt="vasos" src={vaso5}/>
                    {/* <h3>Vaso de lirios</h3>
                    <p>de R$ 120,00</p>
                    <h5>por R$ 90,00</h5> */}

                </div>

                <div>
                    <img src={vaso6} alt="vasos"/>
                    {/* <h3>Vaso de lirios</h3>
                    <p> de R$ 120,00</p>
                    <h5>por R$ 90,00</h5> */}

                </div>
                
                <div>
                    <img src={vaso7} alt="vasos"/>
                    {/* <h3>Vaso de lirios</h3>
                    <p>de R$ 120,00</p>
                    <h5>por R$ 90,00</h5> */}

                </div>

                <div>
                    <img src={vaso8} alt="vasos"/>
                    {/* <h3>Vaso de lirios</h3>
                    <p>de R$ 120,00</p>
                    <h5>por R$ 90,00</h5> */}

                </div>
            </div>
           
        </section>
    )
}
export default Vasos;