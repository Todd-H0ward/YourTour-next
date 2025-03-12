import Link from 'next/link';
import Flex from '@/components/commons/Flex/Flex';
import styles from './Menu.module.scss';

const Menu = ({ items }) => {
  return (
    <Flex gap={50}>
      {items.map((item) => (
        <Link key={item.title} href={item.href} className={styles.link}>
          {item.title}
        </Link>
      ))}
    </Flex>
  );
};

export default Menu;
