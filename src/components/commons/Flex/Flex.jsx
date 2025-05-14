import clsx from 'clsx';
import { bool, node, oneOf, string } from 'prop-types';

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
  children,
  className,
}) => {
  return (
    <div
      className={clsx(
        styles.root,
        alignClasses[align],
        justifyClasses[justify],
        vertical && styles.vertical,
        wrap && styles.wrap,
        className,
      )}
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
  children: node.isRequired,
  className: string,
};

export default Flex;
