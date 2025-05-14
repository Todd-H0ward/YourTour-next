import clsx from 'clsx';
import { bool, func, string } from 'prop-types';

import styles from './Radio.module.scss';

const Radio = ({ name, label, checked, onChange, className, ...props }) => {
  return (
    <label className={styles.label}>
      <input
        className={clsx(styles.root, className)}
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

Radio.propTypes = {
  name: string.isRequired,
  label: string.isRequired,
  checked: bool.isRequired,
  onChange: func.isRequired,
  className: string,
};

export default Radio;
