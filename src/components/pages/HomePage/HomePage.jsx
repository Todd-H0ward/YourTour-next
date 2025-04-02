import Layout from '@/components/commons/Layout';
import Hero from '@/components/pages/HomePage/Hero';
import Tours from '@/components/pages/HomePage/Tours';
import CreateTour from '@/components/pages/HomePage/CreateTour';
import Reviews from '@/components/pages/HomePage/Reviews';
import Photos from '@/components/pages/HomePage/Photos';
import Histories from '@/components/pages/HomePage/Histories';
import Info from '@/components/pages/HomePage/Info';
import styles from './HomePage.module.scss';

const HomePage = () => {
  return (
    <Layout className={styles.page}>
      <Hero />
      <Tours />
      <CreateTour />
      <Reviews />
      <Photos />
      <Histories />
      <Info />
    </Layout>
  );
};

export default HomePage;
