import Header from '@/components/commons/Header/Header';
import styles from './Layout.module.scss';
import Footer from '@/components/commons/Footer/Footer';

const Layout = ({ children }) => {
  return (
    <div className={styles.wrapper}>
      <Header />
      <main className={styles.main}>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
