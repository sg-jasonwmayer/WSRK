import React from 'react';
import PropTypes from 'prop-types';

import Button from 'Components/Button';

const SmallButton = ({
  children,
  ...props
}) => {
  return (
    <Button
      category="small"
      {...props}
    >
      {children}
    </Button>
  );
};

SmallButton.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
    PropTypes.string,
  ]).isRequired,
};

export default SmallButton;
