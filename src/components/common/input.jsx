import React from 'react';
import PropTypes from 'prop-types';

const Input = ({ name, label, error, ...rest }) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input {...rest} name={name} id={name} className="form-control" />
      {error && (
        <div style={{ marginTop: '0.25rem' }} className="text-danger small">
          {error}
        </div>
      )}
    </div>
  );
};

Input.defaultProps = {
  type: 'text',
};

Input.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
  error: PropTypes.string,
};

export default Input;
