import styles from './Checkbox.module.scss';
import clsx from 'clsx';

const Checkbox = ({ label, checked, onChange, className }) => {
  return (
    <label className={styles.label}>
      <input
        className={clsx(styles.checkbox, className)}
        type="checkbox"
        checked={checked}
        onChange={onChange}
      />
      {label}
    </label>
  );
};

export default Checkbox;
