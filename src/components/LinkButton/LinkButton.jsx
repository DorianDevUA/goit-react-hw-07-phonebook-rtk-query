import PropTypes from 'prop-types';
import { StyledLink } from './LinkButton.styled';

const LinkButton = ({ to, children, ...otherProps }) => {
  return (
    <StyledLink to={to} role="button" {...otherProps}>
      {children}
    </StyledLink>
  );
};

LinkButton.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  'aria-label': PropTypes.string.isRequired,
};

export default LinkButton;
