import Flex from '@/components/commons/Flex';
import Title from '@/components/commons/Title';
import Button from '@/components/commons/Button';
import Text from '@/components/commons/Text';
import Container from '@/components/commons/Container';
import styles from './Hero.module.scss';

const Hero = () => {
  return (
    <section className={styles.hero}>
      <Container>
        <Flex className={styles.content} vertical align="center" gap={50}>
          <Title className={styles.title} mb={0} size="big" align="center">
            Идеальные путешествия существуют
          </Title>
          <Text className={styles.description} align="center" w={560}>
            Идейные соображения высшего порядка а также рамки и место обучения
            кадров
          </Text>
          <Button small>Найти тур</Button>
        </Flex>
      </Container>
    </section>
  );
};

export default Hero;
