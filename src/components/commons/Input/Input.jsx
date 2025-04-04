import clsx from 'clsx';

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

export default Input;
