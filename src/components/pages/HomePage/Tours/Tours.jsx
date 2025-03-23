import styles from './Tours.module.scss';
import Title from '@/components/commons/Title/Title';
import Tabs from '@/components/commons/Tabs/Tabs';
import { tours } from '@/data/tours';
import TourCard from '@/components/commons/TourCard/TourCard';
import Grid from '@/components/commons/Grid/Grid';
import Container from '@/components/commons/Container/Container';

const tabsItems = [
  {
    id: 1,
    title: 'Популярные',
  },
  {
    id: 2,
    title: 'Авторские',
  },
  {
    id: 3,
    title: 'Походы',
  },
  {
    id: 4,
    title: 'Сплавы',
  },
  {
    id: 5,
    title: 'Велопрогулки',
  },
];

const Tours = () => {
  return (
    <section id="tours">
      <Container>
        <Title className={styles.title} mb={35} size="normal" align="center">
          Выбери свой тур
        </Title>
        <Tabs className={styles.tabs} items={tabsItems} />

        <Grid gap={30}>
          {tours.map((tour) => (
            <TourCard key={tour.id} tour={tour} />
          ))}
        </Grid>
      </Container>
    </section>
  );
};

export default Tours;
