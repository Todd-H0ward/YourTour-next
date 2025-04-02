import styles from './Button.module.scss';
import clsx from 'clsx';
import { Arrow } from '@/components/icons';

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
  const classes = [
    variantClasses[variant],
    withIcon && styles.withIcon,
    small && styles.small,
  ];

  return (
    <button className={clsx(styles.btn, classes, className)} {...props}>
      {children}
      {withIcon && <Arrow />}
    </button>
  );
};

export default Button;
