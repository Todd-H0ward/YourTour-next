import Link from 'next/link';
import PropTypes from 'prop-types';

import Flex from '@/components/commons/Flex';

import styles from './Menu.module.scss';

const Menu = ({ items, className }) => {
  return (
    <nav className={className}>
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

Menu.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      href: PropTypes.string.isRequired,
    }),
  ).isRequired,
  className: PropTypes.string,
};

export default Menu;
