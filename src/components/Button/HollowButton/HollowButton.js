import React from 'react';
import PropTypes from 'prop-types';


import Button from '../Button.js';

const HollowButton = ({
  children,
  extraClass,
  ...props
}) => {
  return (
    <Button
      category="hollow"
      {...props}
      extraClass={extraClass}
    >
      {children}
    </Button>
  );
};

HollowButton.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
    PropTypes.string,
  ]).isRequired,
  extraClass: PropTypes.string,
};

HollowButton.defaultProps = {
  extraClass: '',
};

export default HollowButton;
