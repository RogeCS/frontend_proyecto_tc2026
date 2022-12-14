import React from "react";

import "../styles/components/input.css";

const Input = ({
    label,
    type, 
    value, 
    onChange, 
    placeholder = '', 
    name, 
    id,
    disabled = false
  }) => (
<div>
    <div className="group">      
      <input type={type} value={value} onChange={onChange} name={name} id={id} required disabled={disabled} />
      <span className="highlight"></span>
      <span className="bar"></span>
      <label>{label}</label>
    </div>
    
</div>

  
);

export default Input;       