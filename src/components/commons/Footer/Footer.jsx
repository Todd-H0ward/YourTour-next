import Button from '@/components/commons/Button';
import Container from '@/components/commons/Container';
import Flex from '@/components/commons/Flex';
import Text from '@/components/commons/Text';

import socialLinks from '@/constants/socialLinks';

import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Container>
        <Flex justify="between" className={styles.content}>
          <Text>Наши социальные сети</Text>

          <Flex className={styles.wrapper}>
            {socialLinks.map((link) => (
              <Flex key={link.title} className={styles.item} align="center">
                {link.icon}
                <Button
                  variant="link"
                  className={styles.link}
                  href={link.link}
                  target="_blank"
                >
                  {link.title}
                </Button>
              </Flex>
            ))}
          </Flex>
        </Flex>
      </Container>
    </footer>
  );
};

export default Footer;
