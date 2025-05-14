import { func, string } from 'prop-types';

import styles from './Textarea.module.scss';

const Textarea = ({ value, onChange, label, ...props }) => {
  return (
    <label className={styles.label}>
      {label}
      <textarea
        className={styles.root}
        value={value}
        onChange={onChange}
        {...props}
      />
    </label>
  );
};

Textarea.propTypes = {
  value: string.isRequired,
  onChange: func.isRequired,
  label: string.isRequired,
};

export default Textarea;
