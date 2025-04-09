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
          <Title align="center">Истории путешествий</Title>
          <Text className={styles.description} align="center">
            Идейные соображения высшего порядка, а также рамки и место обучения
            кадров
          </Text>

          <Flex className={styles.content} vertical align="stretch">
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
