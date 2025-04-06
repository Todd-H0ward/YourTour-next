import { arrayOf, shape, string } from 'prop-types';

import Button from '@/components/commons/Button';
import Flex from '@/components/commons/Flex';

import styles from './Menu.module.scss';

const Menu = ({ items, className }) => {
  return (
    <nav className={className}>
      <Flex className={styles.list} gap={50}>
        {items.map((item) => (
          <Button variant="link" key={item.title} href={item.href}>
            {item.title}
          </Button>
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
