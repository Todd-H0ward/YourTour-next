import Flex from '@/components/commons/Flex/Flex';
import Link from 'next/link';
import Menu from '@/components/commons/Menu/Menu';
import Image from 'next/image';
import styles from './Header.module.scss';
import useScroll from '@/hooks/useScroll';
import clsx from 'clsx';

const menuItems = [
  {
    title: 'Туры',
    href: '#choice',
  },
  {
    title: 'Создать тур',
    href: '#make',
  },
  {
    title: 'Отзывы',
    href: '#reviews',
  },
  {
    title: 'Истории',
    href: '#history',
  },
];

const Header = () => {
  const { scrollY } = useScroll();

  return (
    <header className={clsx(styles.header, scrollY > 450 && styles.fixed)}>
      <Flex justify="between" align="flex-start" className={styles.container}>
        <Link href="/">
          <Image
            className={styles.logo}
            src="/logo.svg"
            width={180}
            height={30}
            alt="logo"
          />
        </Link>

        <Menu items={menuItems} />

        <a href="tel:89999999999">+7 999 999 99 99</a>
      </Flex>
    </header>
  );
};

export default Header;
