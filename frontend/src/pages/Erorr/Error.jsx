import styles from './Error.module.css';
import { Link } from 'react-router-dom';
function Error(){
    return <div className={styles.ErrorWrapper}>
        <div className={styles.ErrorHeader}>Error 404 - Page not found</div>
        <div className={styles.ErrorBody}>Go back to 
            <Link to='/' className={styles.homelink}> home</Link>
            </div>
        </div>
}

export default Error;