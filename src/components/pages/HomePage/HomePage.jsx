import clsx from 'clsx';
import styles from './HomePage.module.scss';
import Layout from '@/components/commons/Layout/Layout';
import Hero from '@/components/pages/HomePage/Hero/Hero';

const HomePage = () => {
  return (
    <Layout>
      <Hero />
      <div className={clsx(styles.container)}></div>
    </Layout>
  );
};

export default HomePage;
