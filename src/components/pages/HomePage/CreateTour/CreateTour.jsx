import Title from '@/components/commons/Title/Title';
import Text from '@/components/commons/Text/Text';
import Flex from '@/components/commons/Flex/Flex';
import Form from '@/components/commons/Form/Form';
import Container from '@/components/commons/Container/Container';
import styles from './CreateTour.module.scss';

const CreateTour = () => {
  return (
    <section id="create">
      <Container>
        <Flex vertical align="center">
          <Title mb={30} align="center" className={styles.title}>
            Собери свой тур
          </Title>
          <Text mb={100} className={styles.description} align="center">
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
