import styles from '../../styles/Home.module.css';
import Link from 'next/link';
import Counts from './count'

const Home = ( data ) => {
    return (
        <div>
            <h1>My Favorite Foods
            </h1>
            <div >
                { data.posts.map((item, index) => {
                    const favoriteInfo = {name:item.name, reason:item.reason} 
                    return (
                        <div key={index} >
                           <Link as={`/about/${index}`} href={{ pathname: `/about/[id]`, query: favoriteInfo }}>
                               {item.name}  
                            </Link>
                            <div>{Counts()}
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    );

}

export default Home

export async function getServerSideProps() {
    const res = await fetch(`https://api.sssapi.app/632ipWakW5npmmKenmJxH`)
    const posts = await res.json()
    return { props:{ posts }}
}
  