import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Carousel from 'react-bootstrap/Carousel';


export default function MyPage () {
    return (
        <div>
            <h1> Iwamoto Naomi </h1>
            <div className={styles.footer}>
              <h2 >Future Dreams</h2>
            </div>
              <Carousel>
                <Carousel.Item>
                  <img className="d-block w-100" src="/cat.jpg" />
                  <Carousel.Caption>
                    <h3>engineer</h3>
                    <p>I </p>
                 </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                  <img className="d-block w-100" src="/engineercat.jpg"/>
                  <Carousel.Caption>
                    <h3>Living with cats</h3>
                    <p>I </p>
                  </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img className="d-block w-100" src="/Hawaii.jpg"/>
                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>I</p>
                    </Carousel.Caption>
                </Carousel.Item>
              </Carousel>
        </div>
    )
}




