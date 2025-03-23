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

export default Textarea;
