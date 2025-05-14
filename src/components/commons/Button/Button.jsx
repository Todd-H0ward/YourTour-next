import clsx from 'clsx';
import { bool, func, node, oneOf, string } from 'prop-types';

import { Arrow } from '@/components/icons';

import styles from './Button.module.scss';

const variantClasses = {
  solid: styles.solid,
  filled: styles.filled,
  clear: styles.clear,
};

const Button = ({
  variant = 'solid',
  withIcon = false,
  small = false,
  onClick,
  children,
  className,
  ...props
}) => {
  return (
    <button
      className={clsx(
        styles.root,
        variantClasses[variant],
        withIcon && styles.withIcon,
        small && styles.small,
        className,
      )}
      onClick={onClick}
      {...props}
    >
      {children}
      {withIcon && <Arrow />}
    </button>
  );
};

Button.propTypes = {
  variant: oneOf(['solid', 'filled', 'clear']),
  withIcon: bool,
  small: bool,
  onClick: func,
  children: node.isRequired,
  className: string,
};

export default Button;
