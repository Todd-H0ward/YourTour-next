import clsx from 'clsx';
import { useState } from 'react';

import Flex from '@/components/commons/Flex';

import styles from './Tabs.module.scss';

const Tabs = ({ items, className }) => {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <Flex
      wrap
      gap={30}
      gapY={10}
      justify="center"
      className={clsx(styles.tabs, className)}
    >
      {items.map((item) => (
        <button
          key={item.id}
          className={clsx(styles.tab, activeTab === item.id && styles.active)}
          onClick={() => handleTabClick(item.id)}
        >
          {item.title}
        </button>
      ))}
    </Flex>
  );
};

export default Tabs;
