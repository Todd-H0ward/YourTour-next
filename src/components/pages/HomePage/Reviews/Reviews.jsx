import Flex from '@/components/commons/Flex';
import Grid from '@/components/commons/Grid';
import ReviewCard from '@/components/commons/ReviewCard';
import Section from '@/components/commons/Section';
import Text from '@/components/commons/Text';
import Title from '@/components/commons/Title';

import reviews from '@/stubs/reviews';

import styles from './Reviews.module.scss';

const Reviews = () => {
  return (
    <Section id="reviews">
      <Flex vertical align="center">
        <Title className={styles.title} align="center">
          Отзывы наших путешественников
        </Title>
        <Text className={styles.description} align="center">
          Идейные соображения высшего порядка, а также рамки и место обучения
          кадров
        </Text>
        <Grid
          className={styles.content}
          breakpoints={{ large: 2, big: 2, small: 1 }}
        >
          {reviews.map((review) => (
            <ReviewCard key={review.id} review={review} />
          ))}
        </Grid>
      </Flex>
    </Section>
  );
};

export default Reviews;
