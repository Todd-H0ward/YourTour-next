import styles from './Flex.module.scss';
import clsx from 'clsx';

const alignClasses = {
  start: styles.alignStart,
  end: styles.alignEnd,
  center: styles.alignCenter,
  stretch: styles.alignStretch,
};

const justifyClasses = {
  start: styles.justifyStart,
  end: styles.justifyEnd,
  center: styles.justifyCenter,
  between: styles.justifyBetween,
};

const Flex = ({
  vertical = false,
  align = 'start',
  justify = 'start',
  wrap = false,
  gap = 0,
  gapY = gap,
  children,
  className,
}) => {
  const classes = [
    alignClasses[align],
    justifyClasses[justify],
    vertical && styles.vertical,
    wrap && styles.wrap,
  ];

  return (
    <div
      className={clsx(styles.flex, classes, className)}
      style={{
        '--gap': `${gap}px`,
        '--gap-y': `${gapY}px`,
      }}
    >
      {children}
    </div>
  );
};

export default Flex;
