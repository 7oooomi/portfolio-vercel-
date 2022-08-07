import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Carousel from 'react-bootstrap/Carousel';


export default function MyPage () {
    return (
        <div>
            <h1> Iwamoto Naomi </h1>
            <div className={styles.footer}>
                {/* <p >
                    <Image src='/cat.jpg' width={400} height={350} />
                </p>
                <div>
                  <h2>Future Dreams</h2>
                  <li>engineer</li>
                  <li>Living with cats</li>
                </div> */}
                <Carousel>
                    <Carousel.Item>
        <img
          className="d-block w-100"
          src="/cat.jpg"
          alt="My Dream"
        />
        <Carousel.Caption>
          <h3>engineer</h3>
          <p>I </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="holder.js/800x400?text=Second slide&bg=282c34"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Living with cats</h3>
          <p>I </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="holder.js/800x400?text=Third slide&bg=20232a"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            I
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>


            </div>
        </div>
    )
}




