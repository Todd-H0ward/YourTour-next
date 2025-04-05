import clsx from 'clsx';
import PropTypes from 'prop-types';

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

Radio.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  className: PropTypes.string,
};

export default Radio;
