import Footer from '../Footer/Footer';
import NavBar from '../NavBar/NavBar';
import styles from './Layout.css';

export default function Layout({ children }) {
  return (
    <>
      <NavBar />
      <main>{children}</main>
      <Footer />
    </>
  );
}
