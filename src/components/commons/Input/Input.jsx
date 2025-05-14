import clsx from 'clsx';
import { func, string } from 'prop-types';

import Text from '@/components/commons/Text';

import styles from './Input.module.scss';

const Input = ({ value, onChange, label, type = 'text', error, ...props }) => {
  return (
    <label className={styles.label}>
      {label}
      <input
        className={clsx(
          styles.root,
          type === 'date' && styles.date,
          !value && styles.empty,
          error && styles.error,
        )}
        type={type}
        value={value}
        onChange={onChange}
        {...props}
      />
      {error && (
        <Text className={styles.message} size="small">
          {error}
        </Text>
      )}
    </label>
  );
};

Input.propTypes = {
  value: string.isRequired,
  onChange: func.isRequired,
  label: string.isRequired,
  type: string,
  error: string,
};

export default Input;
