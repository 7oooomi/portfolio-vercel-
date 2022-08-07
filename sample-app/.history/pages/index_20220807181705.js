import Image from 'next/image';
import styles from '../styles/Home.module.css';


export default function MyPage () {
    return (
        <div>
            <h1> Iwamoto Naomi </h1>
            <div className={styles.title}>
                <p >
                    <Image src='/cat.jpg' width={400} height={350} />
                </p>
                <div>
                  <h2>Future Dreams</h2>
                  <li>engineer</li>
                  <li>Living with cats</li>
                </div>
            </div>
        </div>
    )
}
