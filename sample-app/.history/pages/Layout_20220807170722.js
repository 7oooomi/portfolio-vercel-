import Home from './component/Header';
import Footer from './component/Footer';


export default function Layout ({ children }) {
    return (
        <>
          <Home />
            <main>{children}</main>
          <Footer />
        </>
    );
}