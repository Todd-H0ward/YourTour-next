import Image from 'next/image';

import Container from '@/components/commons/Container';
import Flex from '@/components/commons/Flex';
import Grid from '@/components/commons/Grid';
import Section from '@/components/commons/Section';
import Text from '@/components/commons/Text';
import Title from '@/components/commons/Title';

import styles from './Info.module.scss';

const Info = () => {
  return (
    <Section>
      <Container small>
        <Grid
          className={styles.container}
          breakpoints={{ large: 2, big: 2, small: 1 }}
          gap={30}
        >
          <Image
            className={styles.image}
            src="/info.jpg"
            alt="info"
            width={370}
            height={370}
          />
          <Flex className={styles.info} vertical gap={20} justify="center">
            <Title mb={0} size="small" align="left">
              Пора в путешествие вместе с нами!
            </Title>
            <Text className={styles.text}>
              Напиши на почту и узнай подробности на{' '}
              <a className={styles.link} href="mailto:yourtour@gmail.com">
                yourtour@gmail.com
              </a>
            </Text>
          </Flex>
        </Grid>
      </Container>
    </Section>
  );
};

export default Info;
