import Image from 'next/image';

import Container from '@/components/commons/Container';
import Flex from '@/components/commons/Flex';
import Grid from '@/components/commons/Grid';
import Section from '@/components/commons/Section';
import Text from '@/components/commons/Text';
import Title from '@/components/commons/Title';

import photos from '@/stubs/photos';

import styles from './Photos.module.scss';

const Photos = () => {
  return (
    <Section>
      <Container fullWidth>
        <Flex vertical align="center">
          <Title align="center">Фотографии путешествий</Title>
          <Text className={styles.description} align="center">
            Идейные соображения высшего порядка, а также рамки и место обучения
            кадров
          </Text>
          <Grid
            className={styles.content}
            breakpoints={{ large: 20, big: 12, small: 6 }}
          >
            {photos.map((photo) => (
              <div key={photo.id} className={styles.wrapper}>
                <Image
                  src={photo.image}
                  width={450}
                  height={301}
                  alt={photo.alt}
                  className={styles.photo}
                />
              </div>
            ))}
          </Grid>
        </Flex>
      </Container>
    </Section>
  );
};

export default Photos;
