import styles from './Grid.module.scss';
import clsx from 'clsx';

const Grid = ({
  gap = 0,
  breakpoints = { large: 3, big: 2, small: 1 },
  children,
  className,
}) => {
  return (
    <div
      className={clsx(styles.grid, className)}
      style={{
        '--gap': `${gap}px`,
        '--large': breakpoints.large,
        '--big': breakpoints.big,
        '--small': breakpoints.small,
      }}
    >
      {children}
    </div>
  );
};

export default Grid;
