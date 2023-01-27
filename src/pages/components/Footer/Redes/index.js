import styles from '../Redes/Redes.module.css';
import logo from '../../../../img/footer/logo.png'
import face from '../../../../img/footer/face.png'
import insta from '../../../../img/footer/insta.png'
import linke from '../../../../img/footer/linke.png'

function Redes (){
    return(
        <nav className={styles.container}>
            <img src={logo}/>
            <div >
                <a href="" target="_blank"><img src={face}/></a>
                <a href="" target="_blank"><img src={insta}/></a>
                <a href="https://www.linkedin.com/company/grupo-colina/mycompany/" target="_blank"><img src={linke}/></a>
            </div>
            
        </nav>
    )
}
export default Redes;