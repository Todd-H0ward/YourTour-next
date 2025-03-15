import Flex from '@/components/commons/Flex/Flex';
import Title from '@/components/commons/Title/Title';
import Button from '@/components/commons/Button/Button';
import Text from '@/components/commons/Text/Text';
import Container from '@/components/commons/Container/Container';
import styles from './Hero.module.scss';

const Hero = () => {
  return (
    <section className={styles.hero}>
      <Container>
        <Flex vertical align="center" gap={50}>
          <Title size="big" align="center">
            Идеальные путешествия существуют
          </Title>
          <Text className={styles.subtitle} align="center">
            Идейные соображения высшего порядка, а также рамки и место обучения
            кадров
          </Text>
          <Button small>Найти тур</Button>
        </Flex>
      </Container>
    </section>
  );
};

export default Hero;
