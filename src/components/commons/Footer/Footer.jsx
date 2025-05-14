import Flex from '@/components/commons/Flex';
import Link from '@/components/commons/Link';
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
              <Link className={styles.link} href={link.link} isExternal>
                {link.title}
              </Link>
            </Flex>
          ))}
        </Flex>
      </Flex>
    </footer>
  );
};

export default Footer;
