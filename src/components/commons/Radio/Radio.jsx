import clsx from 'clsx';

import styles from './Radio.module.scss';

const Radio = ({ name, label, checked, onChange, className, ...props }) => {
  return (
    <label className={styles.label}>
      <input
        className={clsx(styles.radio, className)}
        type="radio"
        checked={checked}
        name={name}
        onChange={onChange}
        {...props}
      />
      {label}
    </label>
  );
};

export default Radio;
