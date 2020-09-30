/* eslint-disable react/require-default-props */
import React from 'react';
import PropTypes from 'prop-types';

export default function Button(props) {
  const { label, customClassName, onClick } = props;
  return (
    <button className={'normal-btn ' + customClassName} onClick={onClick}>
      {label}
    </button>
  );
}

Button.propTypes = {
  label: PropTypes.string.isRequired,
  customClassName: PropTypes.string,
  onClick: PropTypes.func.isRequired,
};
