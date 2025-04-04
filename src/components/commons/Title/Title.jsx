import clsx from 'clsx';
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

export default Title;
