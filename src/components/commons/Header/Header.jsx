'use client';

import clsx from 'clsx';
import Link from 'next/link';

import Button from '@/components/commons/Button';
import Flex from '@/components/commons/Flex';
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
    <header className={clsx(styles.header, isStickyHeader && styles.fixed)}>
      <Flex className={styles.inner} justify="between" align="center">
        <Link className={styles.logo} href="/">
          <Logo />
        </Link>

        <Menu className={styles.menu} items={menuItems} />

        <Button variant="link" href="tel:89999999999">
          +7 999 999 99 99
        </Button>
      </Flex>
    </header>
  );
};

export default Header;
