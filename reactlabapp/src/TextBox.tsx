import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

interface Props {
  sign: string,
  change: (value : string) => void;
}

function TextBox(props: Props) {
  return (
    <label className="textBox">
      {props.sign}
      <input type="text" className="textBoxInput" onChange={event => props.change(event.target.value)}></input>
    </label>
  );
}

export default TextBox;
