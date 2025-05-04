import Button from '@/components/commons/Button';
import Flex from '@/components/commons/Flex';
import Text from '@/components/commons/Text';

import socialLinks from '@/constants/socialLinks';

import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Flex className={styles.inner} justify="between" align="center">
        <Text>Наши социальные сети</Text>

        <Flex align="center" className={styles.wrapper}>
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
    </footer>
  );
};

export default Footer;
