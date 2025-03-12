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

const Text = ({ align = 'left', size = 'normal', children, className }) => {
  return (
    <p className={clsx(alignClasses[align], sizeClasses[size], className)}>
      {children}
    </p>
  );
};

export default Text;
