import styles from '../Main/Main.module.css'
import Flores from './Flores';

function Main (){
    return(
        <main className={styles.containerMain}>
            <Flores/>
        </main>
    )
}
export default Main;