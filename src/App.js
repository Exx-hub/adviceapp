import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import AdviceBox from "./AdviceBox";

function App() {
  const [advice, setAdvice] = useState("");

  const getAdvice = async () => {
    const random = Math.floor(Math.random() * (217 - 1 + 1)) + 1;
    const result = await axios.get(
      `https://api.adviceslip.com/advice/${random}`
    );

    const res = JSON.parse(result.data + "}");
    console.log(res.slip.advice);
    setAdvice(res.slip.advice);

    // for just random one by one
    //https://api.adviceslip.com/advice
    //setAdvice(result.data.slip.advive)
  };

  useEffect(() => {
    getAdvice();
  }, []);

  return (
    <div className="App">
      <AdviceBox advice={advice} getAdvice={getAdvice} />
    </div>
  );
}

export default App;
