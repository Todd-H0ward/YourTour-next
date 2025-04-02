'use client';

import styles from './Select.module.scss';
import { useState } from 'react';
import clsx from 'clsx';
import { DownArrow } from '@/components/icons';

const Select = ({ label, placeholder, items, value, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen((prev) => !prev);

  return (
    <label className={styles.label}>
      {label}
      <div className={styles.wrapper}>
        <select
          className={styles.select}
          value={value}
          onChange={onChange}
          onClick={toggleOpen}
          onBlur={() => setIsOpen(false)}
        >
          <option value="" disabled hidden>
            {placeholder}
          </option>
          {items.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
        <DownArrow className={clsx(styles.icon, isOpen && styles.open)} />
      </div>
    </label>
  );
};

export default Select;
