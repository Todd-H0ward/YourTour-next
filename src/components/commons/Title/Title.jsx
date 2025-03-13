import { createElement } from 'react';
import styles from './Title.module.scss';
import clsx from 'clsx';

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
  mb = 0,
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
