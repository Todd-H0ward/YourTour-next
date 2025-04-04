import clsx from 'clsx';

import styles from './Container.module.scss';

const Container = ({
  fullWidth = false,
  small = false,
  children,
  className,
}) => {
  return (
    <div
      className={clsx(
        styles.container,
        fullWidth && styles.full,
        small && styles.small,
        className,
      )}
    >
      {children}
    </div>
  );
};

export default Container;
