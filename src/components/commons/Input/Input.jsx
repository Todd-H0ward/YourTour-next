import styles from './Input.module.scss';

const Input = ({ value, onChange, label, type = 'text', ...props }) => {
  return (
    <label className={styles.label}>
      {label}
      <input
        className={styles.input}
        type={type}
        value={value}
        onChange={onChange}
        {...props}
      />
    </label>
  );
};

export default Input;
