import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from  '../../styles/Home.module.css';

const List = () => {
    const router = useRouter();
   
    
    return (
        <div>
            <h1>Reason</h1>
            <div className={styles.footer}>
                <div className={styles.container}>
                    <div>
                        {router.query.name}
                    </div>
                    <p>
                        {router.query.reason}
                    </p>
                    <Link href='/about'><a>back</a></Link>
                </div>
            </div>
        </div>
    )
}

export default List;