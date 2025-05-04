import { arrayOf, shape, string } from 'prop-types';

import Flex from '@/components/commons/Flex';
import Link from '@/components/commons/Link';

import styles from './Menu.module.scss';

const Menu = ({ items, className }) => {
  return (
    <nav className={className}>
      <Flex className={styles.list}>
        {items.map((item) => (
          <Link key={item.title} href={item.href}>
            {item.title}
          </Link>
        ))}
      </Flex>
    </nav>
  );
};

Menu.propTypes = {
  items: arrayOf(
    shape({
      title: string.isRequired,
      href: string.isRequired,
    }),
  ).isRequired,
  className: string,
};

export default Menu;
