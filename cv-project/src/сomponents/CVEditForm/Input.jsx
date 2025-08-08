import React from 'react';

export default function Input({
  label,
  id,
  type,
  placeholder,
  inputClass,
  disabled,
  required,
  register,
}) {
  return (
    <>
      {label && <label htmlFor={id}>{label}</label>}
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        className={inputClass}
        disabled={disabled}
        required={required}
        {...register}
      />
    </>
  );
}
