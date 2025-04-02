import Title from '@/components/commons/Title';
import Text from '@/components/commons/Text';
import Flex from '@/components/commons/Flex';
import Button from '@/components/commons/Button';
import Image from 'next/image';
import styles from './HistoryCard.module.scss';

const HistoryCard = ({ history }) => {
  const { title, description, advantages = [], socials } = history;

  return (
    <div className={styles.card}>
      <Image
        className={styles.image}
        src={history.image}
        alt={history.title}
        width={1170}
        height={567}
      />
      <Flex
        className={styles.content}
        vertical
        justify="between"
        align="stretch"
      >
        <Flex vertical>
          <Title className={styles.title} w={555} size="small" mb={37}>
            {title}
          </Title>
          <Text w={555} mb={25}>
            {description}
          </Text>
          {advantages && (
            <ul className={styles.list}>
              {advantages.map((advantage, index) => (
                <li key={index}>{advantage}</li>
              ))}
            </ul>
          )}
        </Flex>
        <Flex justify="between" align="end">
          <Button className={styles.btn} withIcon>
            Подробнее
          </Button>
          <Flex className={styles.links} gap={36}>
            {socials &&
              socials.map((social, index) => (
                <a key={index} className={styles.link} href={social.url}>
                  {social.type}
                </a>
              ))}
          </Flex>
        </Flex>
      </Flex>
    </div>
  );
};

export default HistoryCard;
