import Container from '@/components/commons/Container/Container';
import Flex from '@/components/commons/Flex/Flex';
import styles from './Info.module.scss';
import Image from 'next/image';
import Title from '@/components/commons/Title/Title';
import Text from '@/components/commons/Text/Text';
import Grid from '@/components/commons/Grid/Grid';

const Info = () => {
  return (
    <section>
      <Container small>
        <Grid
          className={styles.container}
          breakpoints={{ large: 2, big: 2, small: 1 }}
          gap={30}
        >
          <Image
            className={styles.image}
            src="/images/info.jpg"
            alt="info"
            width={370}
            height={370}
          />
          <Flex className={styles.info} vertical gap={20} justify="center">
            <Title size="small" align="left">
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
    </section>
  );
};

export default Info;
