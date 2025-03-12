import Link from 'next/link';
import Flex from '@/components/commons/Flex/Flex';
import styles from './Menu.module.scss';

const Menu = ({ items }) => {
  return (
    <nav className={styles.menu}>
      <Flex className={styles.list} gap={50}>
        {items.map((item) => (
          <Link key={item.title} href={item.href} className={styles.link}>
            {item.title}
          </Link>
        ))}
      </Flex>
    </nav>
  );
};

export default Menu;
