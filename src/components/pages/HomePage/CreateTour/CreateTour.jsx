import Container from '@/components/commons/Container';
import Flex from '@/components/commons/Flex';
import Form from '@/components/commons/Form';
import Text from '@/components/commons/Text';
import Title from '@/components/commons/Title';

import styles from './CreateTour.module.scss';

const CreateTour = () => {
  return (
    <section id="create">
      <Container>
        <Flex vertical align="center">
          <Title align="center">Собери свой тур</Title>
          <Text className={styles.description} mb={100} w={400} align="center">
            Идейные соображения высшего порядка, а также рамки и место обучения
            кадров
          </Text>
          <Form />
        </Flex>
      </Container>
    </section>
  );
};

export default CreateTour;
