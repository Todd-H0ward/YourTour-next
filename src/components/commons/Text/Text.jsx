import styles from './Text.module.scss';
import clsx from 'clsx';

const sizeClasses = {
  big: styles.big,
  normal: styles.normal,
  small: styles.small,
};

const alignClasses = {
  center: styles.alignCenter,
  left: styles.alignLeft,
};

const Text = ({
  align = 'left',
  size = 'normal',
  mb = 0,
  children,
  className,
}) => {
  return (
    <p
      className={clsx(
        styles.text,
        alignClasses[align],
        sizeClasses[size],
        className,
      )}
      style={{
        '--mb': `${mb}px`,
      }}
    >
      {children}
    </p>
  );
};

export default Text;
