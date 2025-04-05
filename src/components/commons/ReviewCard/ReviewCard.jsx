import Image from 'next/image';
import PropTypes from 'prop-types';

import Flex from '@/components/commons/Flex';
import Text from '@/components/commons/Text';
import Title from '@/components/commons/Title';

import styles from './ReviewCard.module.scss';

const ReviewCard = ({ review }) => {
  return (
    <div className={styles.card}>
      <Flex
        className={styles.inner}
        vertical
        justify="between"
        align="stretch"
        gap={70}
      >
        <Flex className={styles.comment} vertical gap={28}>
          {review.comment.split('\n').map((text) => (
            <Text key={text} size="big" align="left">
              {text}
            </Text>
          ))}
        </Flex>
        <Flex justify="between" align="end">
          <Flex vertical gap={8}>
            <Title mb={0} size="small">
              {review.name}
            </Title>
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
  review: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    tour: PropTypes.string.isRequired,
    comment: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
  }).isRequired,
};

export default ReviewCard;
