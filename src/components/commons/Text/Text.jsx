import clsx from 'clsx';
import PropTypes from 'prop-types';

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

Text.propTypes = {
  align: PropTypes.oneOf(['left', 'center']),
  size: PropTypes.oneOf(['big', 'normal', 'small']),
  mb: PropTypes.number,
  w: PropTypes.number,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default Text;
