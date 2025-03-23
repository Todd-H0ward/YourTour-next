import Container from '@/components/commons/Container/Container';
import Title from '@/components/commons/Title/Title';
import Flex from '@/components/commons/Flex/Flex';
import Grid from '@/components/commons/Grid/Grid';
import ReviewCard from '@/components/commons/ReviewCard/ReviewCard';
import Text from '@/components/commons/Text/Text';
import { reviews } from '@/data/reviews';
import styles from './Reviews.module.scss';

const Reviews = () => {
  return (
    <section id="reviews">
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
    </section>
  );
};

export default Reviews;
