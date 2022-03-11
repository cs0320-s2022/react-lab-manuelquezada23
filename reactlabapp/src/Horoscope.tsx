import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import TextBox from './TextBox';
// @ts-ignore
import { AwesomeButton } from "react-awesome-button";
import axios from 'axios';

interface horoscopeData {
  horoscope: string[];
}

function Horoscope() {
  const [sun, setSun] = useState("");
  const [moon, setMoon] = useState("")
  const [rising, setRising] = useState("")
  const [horoscope, setHoroscope] = useState<string[]>([]);

  const requestHoroscope = async () => {
    const res = await fetch('http://localhost:4567/horoscope', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            sun: sun,
            moon: moon,
            rising: rising
        })
    });
    const data: horoscopeData = await res.json();
    setHoroscope(data.horoscope);
};

  return (
    <div>
      <h1> Horoscopes </h1>
      <div className="textBoxes">
        <TextBox sign={"sun"} change={setSun}/>
        <TextBox sign={"moon"} change={setMoon}/>
        <TextBox sign={"rising"} change={setRising}/>
        <AwesomeButton type="primary" onPress={requestHoroscope}>
            Submit
        </AwesomeButton>
        <ul>
          {horoscope.map(h => <li className="list">{h}</li>)}
        </ul>
      </div>
    </div>      
  );
}

export default Horoscope;
