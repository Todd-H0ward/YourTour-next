import clsx from 'clsx';
import PropTypes from 'prop-types';

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
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
};

export default Input;
