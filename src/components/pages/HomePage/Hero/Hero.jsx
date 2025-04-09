import Button from '@/components/commons/Button';
import Container from '@/components/commons/Container';
import Flex from '@/components/commons/Flex';
import Section from '@/components/commons/Section';
import Text from '@/components/commons/Text';
import Title from '@/components/commons/Title';

import styles from './Hero.module.scss';

const Hero = () => {
  return (
    <Section className={styles.hero}>
      <Container>
        <Flex className={styles.content} vertical align="center">
          <Title className={styles.title} size="big" align="center">
            Идеальные путешествия существуют
          </Title>
          <Text className={styles.description} align="center">
            Идейные соображения высшего порядка а также рамки и место обучения
            кадров
          </Text>
          <Button small>Найти тур</Button>
        </Flex>
      </Container>
    </Section>
  );
};

export default Hero;
