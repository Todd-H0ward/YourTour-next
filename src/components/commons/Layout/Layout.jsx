import Header from '@/components/commons/Header/Header';
import styles from './Layout.module.scss';
import Footer from '@/components/commons/Footer/Footer';
import clsx from 'clsx';

const Layout = ({ children, className }) => {
  return (
    <div className={clsx(styles.layout, className)}>
      <Header />
      <main className={styles.main}>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
