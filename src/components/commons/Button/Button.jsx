import clsx from 'clsx';
import PropTypes from 'prop-types';

import { Arrow } from '@/components/icons';

import styles from './Button.module.scss';

const variantClasses = {
  solid: styles.solid,
  filled: styles.filled,
  link: styles.link,
};

const Button = ({
  variant = 'solid',
  withIcon = false,
  small = false,
  children,
  className,
  ...props
}) => {
  return (
    <button
      className={clsx(
        styles.btn,
        variantClasses[variant],
        withIcon && styles.withIcon,
        small && styles.small,
        className,
      )}
      {...props}
    >
      {children}
      {withIcon && <Arrow />}
    </button>
  );
};

Button.propTypes = {
  variant: PropTypes.oneOf(['solid', 'filled', 'link']),
  withIcon: PropTypes.bool,
  small: PropTypes.bool,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default Button;
