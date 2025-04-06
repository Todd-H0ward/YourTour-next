import Container from '@/components/commons/Container';
import Flex from '@/components/commons/Flex';
import Grid from '@/components/commons/Grid';
import ReviewCard from '@/components/commons/ReviewCard';
import Section from '@/components/commons/Section';
import Text from '@/components/commons/Text';
import Title from '@/components/commons/Title';

import styles from './Reviews.module.scss';

import { reviews } from '@/data/reviews';

const Reviews = () => {
  return (
    <Section id="reviews">
      <Container>
        <Flex vertical align="center">
          <Title w={530} align="center">
            Отзывы наших путешественников
          </Title>
          <Text className={styles.description} mb={100} w={400} align="center">
            Идейные соображения высшего порядка, а также рамки и место обучения
            кадров
          </Text>
          <Grid gap={30} breakpoints={{ large: 2, big: 2, small: 1 }}>
            {reviews.map((review) => (
              <ReviewCard key={review.id} review={review} />
            ))}
          </Grid>
        </Flex>
      </Container>
    </Section>
  );
};

export default Reviews;
