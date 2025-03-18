import Container from '@/components/commons/Container/Container';
import Title from '@/components/commons/Title/Title';
import Text from '@/components/commons/Text/Text';
import Flex from '@/components/commons/Flex/Flex';
import { histories } from '@/data/histories';
import HistoryCard from '@/components/commons/HistoryCard/HistoryCard';

const Histories = () => {
  return (
    <section id="histories">
      <Container>
        <Title align="center" mb={30}>
          Истории путешествий
        </Title>
        <Text align="center" mb={100}>
          Идейные соображения высшего порядка, а также рамки и место обучения
          кадров
        </Text>

        <Flex vertical align="stretch" gap={50}>
          {histories.map((history) => (
            <HistoryCard key={history.id} history={history} />
          ))}
        </Flex>
      </Container>
    </section>
  );
};

export default Histories;
