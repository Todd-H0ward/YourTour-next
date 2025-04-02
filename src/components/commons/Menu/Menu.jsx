import Link from 'next/link';
import Flex from '@/components/commons/Flex';
import styles from './Menu.module.scss';
import clsx from 'clsx';

const Menu = ({ items, className }) => {
  return (
    <nav className={clsx(styles.menu, className)}>
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
