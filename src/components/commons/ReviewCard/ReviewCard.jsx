import Flex from '@/components/commons/Flex/Flex';
import Title from '@/components/commons/Title/Title';
import Text from '@/components/commons/Text/Text';
import Image from 'next/image';
import styles from './ReviewCard.module.scss';

const ReviewCard = ({ review }) => {
  return (
    <div className={styles.card}>
      <Flex vertical justify="between" align="stretch" gap={70}>
        <Flex vertical gap={28}>
          {review.comment.split('\n').map((text, index) => (
            <Text key={index} size="big">
              {text}
            </Text>
          ))}
        </Flex>
        <Flex justify="between">
          <Flex vertical gap={8}>
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

export default ReviewCard;
