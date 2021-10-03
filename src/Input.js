import React from 'react';
import './App.css';

const Input = ({ type, name, value, onChange, error, onBlur }) => {
  function handleError({ target }) {
    target.previousElementSibling.classList.add('ativo');
  }

  return (
    <div>
      <label className="label" htmlFor={name}>
        {error ? (
          <input
            style={{ borderColor: 'hsl(354, 100%, 66%)' }}
            id={name}
            name={name}
            type={type}
            value={value}
            onChange={onChange}
            onBlur={onBlur}
            placeholder={name}
            onFocus="this.placeholder=''
          "
          />
        ) : (
          <input
            id={name}
            name={name}
            type={type}
            value={value}
            onChange={onChange}
            onBlur={onBlur}
            placeholder={name}
            onFocus="this.placeholder=''
        "
          />
        )}
      </label>
      {error && <p className="textoError">{error}</p>}
    </div>
  );
};

export default Input;
