import PropTypes from 'prop-types';

const IconButton = ({ type = 'button', onClick, children, ...allyProps }) => {
  return (
    <button type={type} onClick={onClick} {...allyProps}>
      {children}
    </button>
  );
};

IconButton.propTypes = {
  type: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  'aria-label': PropTypes.string.isRequired,
};

export default IconButton;
