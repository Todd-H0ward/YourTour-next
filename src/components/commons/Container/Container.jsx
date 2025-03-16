import styles from './Container.module.scss';
import clsx from 'clsx';

const Container = ({ fullWidth = false, children, className }) => {
  return (
    <div
      className={clsx(styles.container, fullWidth && styles.full, className)}
    >
      {children}
    </div>
  );
};

export default Container;
