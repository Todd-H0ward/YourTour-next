import PropTypes from 'prop-types';

import styles from './Textarea.module.scss';

const Textarea = ({ value, onChange, label, ...props }) => {
  return (
    <label className={styles.label}>
      {label}
      <textarea
        className={styles.textarea}
        value={value}
        onChange={onChange}
        {...props}
      />
    </label>
  );
};

Textarea.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
};

export default Textarea;
