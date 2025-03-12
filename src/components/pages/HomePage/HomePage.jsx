import clsx from 'clsx';
import styles from './HomePage.module.scss';
import Layout from '@/components/commons/Layout/Layout';

const HomePage = () => {
  return (
    <Layout>
      <div className={clsx(styles.container)}></div>
    </Layout>
  );
};

export default HomePage;
