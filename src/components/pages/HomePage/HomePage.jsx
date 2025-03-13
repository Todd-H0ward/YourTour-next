import Layout from '@/components/commons/Layout/Layout';
import Hero from '@/components/pages/HomePage/Hero/Hero';
import Tours from '@/components/pages/HomePage/Tours/Tours';
import styles from './HomePage.module.scss';

const HomePage = () => {
  return (
    <Layout>
      <Hero />

      <div className={styles.container}>
        <Tours />
      </div>
    </Layout>
  );
};

export default HomePage;
