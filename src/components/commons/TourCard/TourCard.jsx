import styles from './TourCard.module.scss';
import Title from '@/components/commons/Title/Title';
import Text from '@/components/commons/Text/Text';
import Button from '@/components/commons/Button/Button';
import Flex from '@/components/commons/Flex/Flex';
import Image from 'next/image';

const TourCard = ({ tour }) => {
  return (
    <div className={styles.card}>
      <Image
        className={styles.image}
        width={370}
        height={531}
        src={tour.image.src}
        alt="tour"
      />
      <Flex className={styles.content} vertical align="start" gap={16}>
        <Title mb={0} size="small" w={230}>
          {tour.title}
        </Title>
        <Text className={styles.price} size="small">
          {tour.price}
        </Text>
        <Button withIcon className={styles.btn}>
          Подробнее
        </Button>
      </Flex>
    </div>
  );
};

export default TourCard;
