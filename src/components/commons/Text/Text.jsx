import clsx from 'clsx';

import styles from './Text.module.scss';

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
  w,
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
        '--w': `${w}px`,
      }}
    >
      {children}
    </p>
  );
};

export default Text;
