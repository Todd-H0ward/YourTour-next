import Image from 'next/image';
import { arrayOf, number, shape, string } from 'prop-types';

import Button from '@/components/commons/Button';
import Flex from '@/components/commons/Flex';
import Link from '@/components/commons/Link';
import Text from '@/components/commons/Text';
import Title from '@/components/commons/Title';

import styles from './HistoryCard.module.scss';

const HistoryCard = ({ history }) => {
  const { title, description, advantages, socials, image } = history;

  return (
    <div className={styles.root}>
      <Image
        className={styles.image}
        src={image}
        alt={title}
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
          <Title className={styles.title} size="small">
            {title}
          </Title>
          <Text className={styles.description}>{description}</Text>
          {advantages && (
            <ul className={styles.list}>
              {advantages.map((advantage) => (
                <li key={advantage}>{advantage}</li>
              ))}
            </ul>
          )}
        </Flex>
        <Flex justify="between" align="end">
          <Button className={styles.btn} withIcon>
            Подробнее
          </Button>
          <Flex className={styles.links}>
            {socials &&
              socials.map((social) => (
                <Link key={social.type} href={social.url} isExternal>
                  {social.type}
                </Link>
              ))}
          </Flex>
        </Flex>
      </Flex>
    </div>
  );
};

HistoryCard.propTypes = {
  history: shape({
    id: number.isRequired,
    title: string.isRequired,
    description: string.isRequired,
    advantages: arrayOf(string),
    socials: arrayOf(
      shape({
        type: string.isRequired,
        url: string.isRequired,
      }),
    ),
    image: string.isRequired,
  }).isRequired,
};

export default HistoryCard;
