import { node, string } from 'prop-types';

const Section = ({ children, className, ...props }) => {
  return (
    <section className={className} {...props}>
      {children}
    </section>
  );
};

Section.propTypes = {
  children: node.isRequired,
  className: string,
};

export default Section;
