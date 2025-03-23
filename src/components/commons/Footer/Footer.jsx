import Text from '@/components/commons/Text/Text';
import Flex from '@/components/commons/Flex/Flex';
import Container from '@/components/commons/Container/Container';
import { socialLinks } from '@/data/socialLinks';
import Image from 'next/image';
import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Container>
        <Flex justify="between" className={styles.content}>
          <Text>Наши социальные сети</Text>

          <Flex gap={25}>
            {socialLinks.map((link) => (
              <a
                key={link.title}
                className={styles.link}
                href={link.link}
                target="_blank"
              >
                <Image src={link.icon} alt={link.title} />
                <span className={styles.text}>{link.title}</span>
              </a>
            ))}
          </Flex>
        </Flex>
      </Container>
    </footer>
  );
};

export default Footer;
