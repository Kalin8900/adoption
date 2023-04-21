import { useParams } from 'react-router-dom';
import styles from '../cat/cat.module.css';

export const Cat = () => {
    const {id} = useParams()
return (
    <div className={styles.CatDetail}>
    CAT {id}
    </div>
)
}