import clsx from 'clsx';
import PropTypes from 'prop-types';

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

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default Layout;
