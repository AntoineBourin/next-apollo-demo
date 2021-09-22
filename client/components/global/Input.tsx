import React, { useState } from 'react';

interface InputProps {
  type: string;
  name: string;
  onChange?: (value) => any;
  value: any;
  disabled?: boolean;
  placeholder?: string;
  className?: string;
}

const Input: React.FC<InputProps> = ({
 type,
 name,
 onChange,
 value,
 disabled,
 placeholder,
 className
}) => {
  return (
    <input
      type={type}
      name={name}
      onChange={onChange}
      value={value}
      disabled={disabled}
      placeholder={placeholder}
      className={className}
    />
  )
};

export default Input;