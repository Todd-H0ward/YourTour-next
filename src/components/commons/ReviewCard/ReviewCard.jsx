import Image from 'next/image';
import { number, shape, string } from 'prop-types';

import Flex from '@/components/commons/Flex';
import Text from '@/components/commons/Text';
import Title from '@/components/commons/Title';

import styles from './ReviewCard.module.scss';

const ReviewCard = ({ review }) => {
  return (
    <div className={styles.card}>
      <Flex className={styles.inner} vertical justify="between" align="stretch">
        <Flex className={styles.comment} vertical>
          {review.comment.split('\n').map((text) => (
            <Text key={text} size="big" align="left">
              {text}
            </Text>
          ))}
        </Flex>
        <Flex justify="between" align="end">
          <Flex className={styles.info} vertical>
            <Title size="small">{review.name}</Title>
            <Text size="small">Тур: {review.tour}</Text>
          </Flex>
          <Image
            className={styles.avatar}
            src={review.avatar}
            alt="avatar"
            width={75}
            height={75}
          />
        </Flex>
      </Flex>
    </div>
  );
};

ReviewCard.propTypes = {
  review: shape({
    id: number.isRequired,
    name: string.isRequired,
    tour: string.isRequired,
    comment: string.isRequired,
    avatar: string.isRequired,
  }).isRequired,
};

export default ReviewCard;
