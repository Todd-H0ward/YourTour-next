import clsx from 'clsx';
import PropTypes from 'prop-types';

import styles from './Flex.module.scss';

const alignClasses = {
  start: styles.alignStart,
  end: styles.alignEnd,
  center: styles.alignCenter,
  stretch: styles.alignStretch,
};

const justifyClasses = {
  start: styles.justifyStart,
  end: styles.justifyEnd,
  center: styles.justifyCenter,
  between: styles.justifyBetween,
};

const Flex = ({
  vertical = false,
  align = 'start',
  justify = 'start',
  wrap = false,
  gap = 0,
  gapY = gap,
  children,
  className,
}) => {
  return (
    <div
      className={clsx(
        styles.flex,
        alignClasses[align],
        justifyClasses[justify],
        vertical && styles.vertical,
        wrap && styles.wrap,
        className,
      )}
      style={{
        '--gap': `${gap}px`,
        '--gap-y': `${gapY}px`,
      }}
    >
      {children}
    </div>
  );
};

Flex.propTypes = {
  vertical: PropTypes.bool,
  align: PropTypes.oneOf(['start', 'end', 'center', 'stretch']),
  justify: PropTypes.oneOf(['start', 'end', 'center', 'between']),
  wrap: PropTypes.bool,
  gap: PropTypes.number,
  gapY: PropTypes.number,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default Flex;
