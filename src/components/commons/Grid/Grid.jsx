import clsx from 'clsx';
import { node, number, shape, string } from 'prop-types';

import styles from './Grid.module.scss';

const Grid = ({
  breakpoints = { large: 3, big: 2, small: 1 },
  children,
  className,
}) => {
  return (
    <div
      className={clsx(styles.grid, className)}
      style={{
        '--large': breakpoints.large,
        '--big': breakpoints.big,
        '--small': breakpoints.small,
      }}
    >
      {children}
    </div>
  );
};

Grid.propTypes = {
  breakpoints: shape({
    large: number,
    big: number,
    small: number,
  }),
  children: node.isRequired,
  className: string,
};

export default Grid;
