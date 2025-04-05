import clsx from 'clsx';
import PropTypes from 'prop-types';

import styles from './Grid.module.scss';

const Grid = ({
  gap = 0,
  gapY = gap,
  breakpoints = { large: 3, big: 2, small: 1 },
  children,
  className,
}) => {
  return (
    <div
      className={clsx(styles.grid, className)}
      style={{
        '--gap': `${gap}px`,
        '--gap-y': `${gapY}px`,
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
  gap: PropTypes.number,
  gapY: PropTypes.number,
  breakpoints: PropTypes.shape({
    large: PropTypes.number,
    big: PropTypes.number,
    small: PropTypes.number,
  }),
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default Grid;
