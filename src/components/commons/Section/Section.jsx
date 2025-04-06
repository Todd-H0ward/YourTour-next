import PropTypes from 'prop-types';

const Section = ({ children, className, ...props }) => {
  return (
    <section className={className} {...props}>
      {children}
    </section>
  );
};

Section.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default Section;
