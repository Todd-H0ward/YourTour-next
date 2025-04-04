import clsx from 'clsx';

import Footer from '@/components/commons/Footer';
import Header from '@/components/commons/Header';

import styles from './Layout.module.scss';

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
