import React from 'react';
import PropTypes from 'prop-types';

import Button from 'Components/Button';

const PrimaryButton = ({
  children,
  ...props
}) => {
  return (
    <Button
      category="primary"
      {...props}
    >
      {children}
    </Button>
  );
};

PrimaryButton.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
    PropTypes.string,
  ]).isRequired,
};

export default PrimaryButton;
