'use client';

import clsx from 'clsx';

import Flex from '@/components/commons/Flex';
import Link from '@/components/commons/Link';
import Menu from '@/components/commons/Menu';
import { Logo } from '@/components/icons';

import useScroll from '@/hooks/useScroll';

import styles from './Header.module.scss';

const menuItems = [
  {
    title: 'Туры',
    href: '#tours',
  },
  {
    title: 'Создать тур',
    href: '#create',
  },
  {
    title: 'Отзывы',
    href: '#reviews',
  },
  {
    title: 'Истории',
    href: '#histories',
  },
];

const Header = () => {
  const { scrollY } = useScroll();

  const isStickyHeader = scrollY > 450;

  return (
    <header className={clsx(styles.root, isStickyHeader && styles.fixed)}>
      <Flex className={styles.inner} justify="between" align="center">
        <Link className={styles.logo} href="/">
          <Logo />
        </Link>

        <Menu className={styles.menu} items={menuItems} />

        <Link href="tel:89999999999" isExternal>
          +7 999 999 99 99
        </Link>
      </Flex>
    </header>
  );
};

export default Header;
