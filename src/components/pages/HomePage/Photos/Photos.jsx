import Flex from '@/components/commons/Flex/Flex';
import Title from '@/components/commons/Title/Title';
import Text from '@/components/commons/Text/Text';
import Grid from '@/components/commons/Grid/Grid';
import { photos } from '@/data/photos';
import Image from 'next/image';
import Container from '@/components/commons/Container/Container';
import styles from './Photos.module.scss';

const Photos = () => {
  return (
    <section>
      <Container fullWidth>
        <Flex vertical align="center">
          <Title align="center">Фотографии путешествий</Title>
          <Text className={styles.description} mb={100} w={400} align="center">
            Идейные соображения высшего порядка, а также рамки и место обучения
            кадров
          </Text>
          <Grid
            className={styles.container}
            breakpoints={{ large: 20, big: 12, small: 6 }}
            gap={30}
          >
            {photos.map((photo) => (
              <div key={photo.id} className={styles.wrapper}>
                <Image
                  src={photo.image.src}
                  width={444}
                  height={301}
                  alt={photo.alt}
                  className={styles.photo}
                />
              </div>
            ))}
          </Grid>
        </Flex>
      </Container>
    </section>
  );
};

export default Photos;
