import Container from '@/components/commons/Container';
import Flex from '@/components/commons/Flex';
import HistoryCard from '@/components/commons/HistoryCard';
import Section from '@/components/commons/Section';
import Text from '@/components/commons/Text';
import Title from '@/components/commons/Title';

import histories from '@/stubs/histories';

import styles from './Histories.module.scss';

const Histories = () => {
  return (
    <Section id="histories">
      <Container>
        <Flex vertical align="center">
          <Title align="center" mb={30}>
            Истории путешествий
          </Title>
          <Text className={styles.description} align="center" mb={100} w={400}>
            Идейные соображения высшего порядка, а также рамки и место обучения
            кадров
          </Text>

          <Flex className={styles.content} vertical align="stretch" gap={50}>
            {histories.map((history) => (
              <HistoryCard key={history.id} history={history} />
            ))}
          </Flex>
        </Flex>
      </Container>
    </Section>
  );
};

export default Histories;
