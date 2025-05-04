import clsx from 'clsx';
import { bool, node, string } from 'prop-types';

import styles from './Section.module.scss';

const Section = ({
  fullWidth = false,
  large = false,
  small = false,
  children,
  className,
  ...props
}) => {
  return (
    <section
      className={clsx(
        styles.section,
        large && styles.large,
        small && styles.small,
        fullWidth && styles.full,
        className,
      )}
      {...props}
    >
      {children}
    </section>
  );
};

Section.propTypes = {
  fullWidth: bool,
  large: bool,
  small: bool,
  children: node.isRequired,
  className: string,
};

export default Section;
