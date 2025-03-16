import Layout from '@/components/commons/Layout/Layout';
import Hero from '@/components/pages/HomePage/Hero/Hero';
import Tours from '@/components/pages/HomePage/Tours/Tours';
import CreateTour from '@/components/pages/HomePage/CreateTour/CreateTour';
import Reviews from '@/components/pages/HomePage/Reviews/Reviews';
import Photos from '@/components/pages/HomePage/Photos/Photos';

const HomePage = () => {
  return (
    <Layout>
      <Hero />
      <Tours />
      <CreateTour />
      <Reviews />
      <Photos />
    </Layout>
  );
};

export default HomePage;
