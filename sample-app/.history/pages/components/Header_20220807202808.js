import Head from 'next/head'
import Image from 'next/image';
import Link from 'next/link';
import Nav from 'react-bootstrap/Nav';


export default function Home() {
  return (
    <div>
      <Head>
        <title>I am.</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="text-center mt-4 mb-4">
          <Nav.Link href='/'>I am .</Nav.Link>
        </h1>
        <Nav className="justify-content-end">
          <Nav.Item>
            <Nav.Link style={{color:'black'}} href='/about'>
              about
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link style={{color:'black'}} href='/work'>
              work
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link style={{color:'black'}} href='/contact'>
              contact
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </main>
    </div>
  )
}

