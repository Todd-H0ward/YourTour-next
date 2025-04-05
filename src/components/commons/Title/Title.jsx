import clsx from 'clsx';
import PropTypes from 'prop-types';
import { createElement } from 'react';

import styles from './Title.module.scss';

const sizeClasses = {
  big: styles.big,
  normal: styles.normal,
  small: styles.small,
};

const alignClasses = {
  center: styles.alignCenter,
  left: styles.alignLeft,
};

const Title = ({
  size = 'normal',
  align = 'left',
  mb = 30,
  w,
  children,
  className,
}) => {
  const tagBySize = {
    big: 'h1',
    normal: 'h2',
    small: 'h3',
  };

  return createElement(
    tagBySize[size],
    {
      className: clsx(
        styles.title,
        sizeClasses[size],
        alignClasses[align],
        className,
      ),
      style: { '--mb': `${mb}px`, '--w': `${w}px` },
    },
    [children],
  );
};

Title.propTypes = {
  size: PropTypes.oneOf(['big', 'normal', 'small']),
  align: PropTypes.oneOf(['left', 'center']),
  mb: PropTypes.number,
  w: PropTypes.number,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default Title;
