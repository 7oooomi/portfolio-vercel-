import Home from './components/Header';
import Footer from './components/Footer';


export default function Layout ({ children }) {
    return (
        <>
          <Home />
            <main>{children}</main>
          <Footer />
        </>
    );
}