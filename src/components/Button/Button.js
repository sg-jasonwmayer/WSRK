// Libs / Helpers
import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

// Style
import './Button.scss';

const Button = ({ id, type, category, disabled, action, children, iconDirection, icon, verticalAlign, extraClass, style, badge, isNew }) => {
  const checkForWhiteSpace = category && category.indexOf(' ') > 0 ?
                             category.split(' ').map((cat) => `button-${cat}`).join(' ') :
                             `button-${category}`;

  const className = classnames('button', {
    'button-link': !category,
    [checkForWhiteSpace]: category,
    [extraClass]: extraClass,
  });

  const iconClass = classnames('icon', {
    [`icon-${iconDirection}`]: iconDirection,
  });

  const textClass = classnames({
    top: verticalAlign === 'top',
    super: verticalAlign === 'super',
  });

  return (
    <button
      id={id}
      type={type || 'button'}
      disabled={disabled}
      className={className}
      onClick={action}
      style={style}
    >
      {iconDirection === 'left' && <span className={iconClass}>{ icon() }</span>}
      {textClass === !'' ? <span className={textClass}>{children}</span> : children}
      {iconDirection === 'right' && <span className={iconClass}>{ icon() }</span>}
      {isNew && badge}
    </button>
  );
};

Button.propTypes = {
  id: PropTypes.string,
  category: PropTypes.string,
  type: PropTypes.string,
  disabled: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.number,
  ]),
  extraClass: PropTypes.string,
  icon: PropTypes.func,
  iconDirection: PropTypes.string,
  action: PropTypes.func,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
    PropTypes.string,
  ]),
  verticalAlign: PropTypes.string,
  style: PropTypes.object,
  badge: PropTypes.object,
  isNew: PropTypes.bool,
};

Button.defaultProps = {
  action: null,
  category: 'link',
  extraClass: '',
  type: 'button',
  icon: () => {},
  iconDirection: '',
  disabled: false,
  verticalAlign: '',
  style: {},
  id: '',
  children: '',
  badge: null,
  isNew: false,
};

export default Button;
