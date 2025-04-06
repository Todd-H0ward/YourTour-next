import clsx from 'clsx';
import { bool, node, number, oneOf, string } from 'prop-types';

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
  vertical: bool,
  align: oneOf(['start', 'end', 'center', 'stretch']),
  justify: oneOf(['start', 'end', 'center', 'between']),
  wrap: bool,
  gap: number,
  gapY: number,
  children: node.isRequired,
  className: string,
};

export default Flex;
