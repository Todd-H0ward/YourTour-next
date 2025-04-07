import clsx from 'clsx';
import { node, oneOf, string } from 'prop-types';

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

const Text = ({ align = 'left', size = 'normal', children, className }) => {
  return (
    <p className={clsx(alignClasses[align], sizeClasses[size], className)}>
      {children}
    </p>
  );
};

Text.propTypes = {
  align: oneOf(['left', 'center']),
  size: oneOf(['big', 'normal', 'small']),
  children: node.isRequired,
  className: string,
};

export default Text;
