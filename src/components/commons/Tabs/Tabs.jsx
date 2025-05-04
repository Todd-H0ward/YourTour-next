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
    <Flex wrap justify="center" className={clsx(styles.tabs, className)}>
      {items.map((item) => (
        <Button
          key={item.id}
          variant="clear"
          className={clsx(styles.tab, activeTab === item.id && styles.active)}
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
