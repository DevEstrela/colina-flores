import styles from '../Main/Main.module.css'
import Coroas from './Coroas';
import Vasos from './Vasos'

function Main (){
    return(
        <main className={styles.containerMain}>
            <Coroas/>
            <Vasos/>
        </main>
    )
}
export default Main;