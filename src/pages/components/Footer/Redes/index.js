import styles from '../Redes/Redes.module.css';
import logo from '../../../../img/footer/logo.png'
import face from '../../../../img/footer/face.png'
import insta from '../../../../img/footer/insta.png'
import linke from '../../../../img/footer/linke.png'

function Redes (){
    return(
        <nav className={styles.container}>
            <img src={logo}/>
            <div>
                <img src={face}/>
                <img src={insta}/>
                <img src={linke}/>
            </div>
            
        </nav>
    )
}
export default Redes;