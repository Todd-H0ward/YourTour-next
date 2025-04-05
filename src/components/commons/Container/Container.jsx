import clsx from 'clsx';
import PropTypes from 'prop-types';

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

Container.propTypes = {
  fullWidth: PropTypes.bool,
  small: PropTypes.bool,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default Container;
