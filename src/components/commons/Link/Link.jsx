import clsx from 'clsx';
import NavLink from 'next/link';
import { node, string } from 'prop-types';

import styles from './Link.module.scss';

const Link = ({ href, children, className, ...props }) => {
  const isExternal = !href.startsWith('#') && !href.startsWith('/');

  if (isExternal) {
    return (
      <a
        href={href}
        className={clsx(styles.link, className)}
        target="_blank"
        rel="noopener noreferrer"
        {...props}
      >
        {children}
      </a>
    );
  }

  return (
    <NavLink className={clsx(styles.link, className)} href={href} {...props}>
      {children}
    </NavLink>
  );
};

Link.propTypes = {
  href: string.isRequired,
  children: node.isRequired,
  className: string,
};

export default Link;
