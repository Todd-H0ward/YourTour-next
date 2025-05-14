import clsx from 'clsx';
import { arrayOf, number, shape, string } from 'prop-types';
import { useState } from 'react';

import Button from '@/components/commons/Button';
import Flex from '@/components/commons/Flex';

import styles from './Tabs.module.scss';

const Tabs = ({ items, className }) => {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <Flex className={clsx(styles.root, className)} wrap justify="center">
      {items.map((item) => (
        <Button
          key={item.id}
          className={clsx(styles.tab, activeTab === item.id && styles.active)}
          variant="clear"
          onClick={() => handleTabClick(item.id)}
        >
          {item.title}
        </Button>
      ))}
    </Flex>
  );
};

Tabs.propTypes = {
  items: arrayOf(
    shape({
      id: number.isRequired,
      title: string.isRequired,
    }),
  ).isRequired,
  className: string,
};

export default Tabs;
