import clsx from 'clsx';
import { node, number, oneOf, string } from 'prop-types';
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
  size: oneOf(['big', 'normal', 'small']),
  align: oneOf(['left', 'center']),
  mb: number,
  w: number,
  children: node.isRequired,
  className: string,
};

export default Title;
