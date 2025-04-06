import clsx from 'clsx';
import { bool, node, string } from 'prop-types';

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
  fullWidth: bool,
  small: bool,
  children: node.isRequired,
  className: string,
};

export default Container;
