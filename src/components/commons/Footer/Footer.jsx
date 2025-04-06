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

          <Flex gap={25}>
            {socialLinks.map((link) => (
              <a
                key={link.title}
                className={styles.link}
                href={link.link}
                target="_blank"
              >
                {link.icon}
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
