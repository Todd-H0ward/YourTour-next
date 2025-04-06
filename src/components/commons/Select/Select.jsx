'use client';

import clsx from 'clsx';
import { arrayOf, func, string } from 'prop-types';
import { useState } from 'react';

import { DownArrow } from '@/components/icons';

import styles from './Select.module.scss';

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

Select.propTypes = {
  label: string.isRequired,
  placeholder: string.isRequired,
  items: arrayOf(string).isRequired,
  value: string.isRequired,
  onChange: func.isRequired,
};

export default Select;
