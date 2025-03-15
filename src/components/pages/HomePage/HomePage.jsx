import Layout from '@/components/commons/Layout/Layout';
import Hero from '@/components/pages/HomePage/Hero/Hero';
import Tours from '@/components/pages/HomePage/Tours/Tours';
import CreateTour from '@/components/pages/HomePage/CreateTour/CreateTour';

const HomePage = () => {
  return (
    <Layout>
      <Hero />
      <Tours />
      <CreateTour />
    </Layout>
  );
};

export default HomePage;
