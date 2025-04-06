import clsx from 'clsx';
import { func, string } from 'prop-types';

import styles from './Input.module.scss';

const Input = ({ value, onChange, label, type = 'text', ...props }) => {
  return (
    <label className={styles.label}>
      {label}
      <input
        className={clsx(styles.input, type === 'date' && styles.date)}
        type={type}
        value={value}
        onChange={onChange}
        {...props}
      />
    </label>
  );
};

Input.propTypes = {
  value: string.isRequired,
  onChange: func.isRequired,
  label: string.isRequired,
  type: string,
};

export default Input;
