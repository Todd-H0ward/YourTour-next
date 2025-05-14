import Layout from '@/components/commons/Layout';
import CreateTour from '@/components/pages/HomePage/CreateTour';
import Hero from '@/components/pages/HomePage/Hero';
import Histories from '@/components/pages/HomePage/Histories';
import Info from '@/components/pages/HomePage/Info';
import Photos from '@/components/pages/HomePage/Photos';
import Reviews from '@/components/pages/HomePage/Reviews';
import Tours from '@/components/pages/HomePage/Tours';

import styles from './HomePage.module.scss';

const HomePage = () => {
  return (
    <Layout className={styles.root}>
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
