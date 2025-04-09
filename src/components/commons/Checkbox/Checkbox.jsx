import clsx from 'clsx';
import { bool, func, node, string } from 'prop-types';

import { CheckboxArrow } from '@/components/icons';

import styles from './Checkbox.module.scss';

const Checkbox = ({ label, checked, onChange, className }) => {
  return (
    <label className={styles.label}>
      <div className={styles.wrapper}>
        <input
          className={clsx(styles.checkbox, className)}
          type="checkbox"
          checked={checked}
          onChange={onChange}
        />
        <CheckboxArrow
          className={clsx(styles.icon, checked && styles.checked)}
        />
      </div>
      {label}
    </label>
  );
};

Checkbox.propTypes = {
  label: node.isRequired,
  checked: bool.isRequired,
  onChange: func.isRequired,
  className: string,
};

export default Checkbox;
