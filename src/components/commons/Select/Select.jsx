'use client';

import styles from './Select.module.scss';
import Image from 'next/image';
import { useState } from 'react';
import clsx from 'clsx';

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
        <Image
          className={clsx(styles.icon, isOpen && styles.open)}
          src="/icons/select-icon.svg"
          width={26}
          height={26}
          alt="icon"
        />
      </div>
    </label>
  );
};

export default Select;
