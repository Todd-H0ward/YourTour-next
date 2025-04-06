import Image from 'next/image';
import { number, shape, string } from 'prop-types';

import Button from '@/components/commons/Button';
import Flex from '@/components/commons/Flex';
import Text from '@/components/commons/Text';
import Title from '@/components/commons/Title';

import styles from './TourCard.module.scss';

const TourCard = ({ tour }) => {
  return (
    <div className={styles.card}>
      <Image
        className={styles.image}
        width={370}
        height={531}
        src={tour.image}
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

TourCard.propTypes = {
  tour: shape({
    id: number.isRequired,
    title: string.isRequired,
    price: string.isRequired,
    image: string.isRequired,
  }).isRequired,
};

export default TourCard;
