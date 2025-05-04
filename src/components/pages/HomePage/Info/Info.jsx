import Image from 'next/image';

import Flex from '@/components/commons/Flex';
import Grid from '@/components/commons/Grid';
import Link from '@/components/commons/Link';
import Section from '@/components/commons/Section';
import Text from '@/components/commons/Text';
import Title from '@/components/commons/Title';

import styles from './Info.module.scss';

const Info = () => {
  return (
    <Section small>
      <Grid
        className={styles.content}
        breakpoints={{ large: 2, big: 2, small: 1 }}
      >
        <Image
          className={styles.image}
          src="/info.jpg"
          alt="info"
          width={370}
          height={370}
        />
        <Flex className={styles.info} vertical justify="center">
          <Title size="small" align="left">
            Пора в путешествие вместе с нами!
          </Title>
          <Text className={styles.text}>
            Напиши на почту и узнай подробности на{' '}
            <Link className={styles.link} href="mailto:yourtour@gmail.com">
              yourtour@gmail.com
            </Link>
          </Text>
        </Flex>
      </Grid>
    </Section>
  );
};

export default Info;
