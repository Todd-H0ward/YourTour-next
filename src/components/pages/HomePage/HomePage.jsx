import Layout from '@/components/commons/Layout/Layout';
import Hero from '@/components/pages/HomePage/Hero/Hero';
import Tours from '@/components/pages/HomePage/Tours/Tours';
import CreateTour from '@/components/pages/HomePage/CreateTour/CreateTour';
import Reviews from '@/components/pages/HomePage/Reviews/Reviews';
import Photos from '@/components/pages/HomePage/Photos/Photos';
import Histories from '@/components/pages/HomePage/Histories/Histories';
import Info from '@/components/pages/HomePage/Info/Info';
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
