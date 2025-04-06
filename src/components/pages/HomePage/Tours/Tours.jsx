import Container from '@/components/commons/Container';
import Grid from '@/components/commons/Grid';
import Section from '@/components/commons/Section';
import Tabs from '@/components/commons/Tabs';
import Title from '@/components/commons/Title';
import TourCard from '@/components/commons/TourCard';

import tours from '@/stubs/tours';

import styles from './Tours.module.scss';

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
    <Section id="tours">
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
    </Section>
  );
};

export default Tours;
