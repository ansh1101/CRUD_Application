import axios from "axios";
import React, { useState } from "react";

export default function Calculator() {
  const [value, setValue] = useState("");
  const OnChange = (event) => {
    return setValue(event.target.value);
  };

  const [value2, setValue2] = useState("");
  const OnChange2 = (event) => {
    return setValue2(event.target.value);
  };

  console.log(value);
  console.log(typeof value);

  const restAPI = `https://immense-badlands-43639.herokuapp.com/calculator/`;
  const [result, setResult] = useState("Output Counter");

  const handleChangeAddition = () => {
    axios
      .post(`${restAPI}add`, {
        number1: parseInt(value),
        number2: parseInt(value2),
      })
      .then((response) => {
        setResult("Addition : " + response.data.addition);
      })
      .catch((e) => console.log(e));
  };
  const handleChangeSubtraction = () => {
    axios
      .post(`${restAPI}subtract`, {
        number1: parseInt(value),
        number2: parseInt(value2),
      })
      .then((response) => {
        setResult("Subtraction : " + response.data.subtraction);
      })
      .catch((e) => console.log(e));
  };

  const handleChangeMultiplication = () => {
    axios
      .get(`${restAPI}multiply?number1=${value}&number2=${value2}`, {})
      .then((response) => {
        setResult("Multiplication : " + response.data.multiplication);
      })
      .catch((e) => console.log(e));
  };

  const handleChangeDivision = () => {
    axios
      .get(`${restAPI}division?number1=${value}&number2=${value2}`, {})
      .then((response) => {
        setResult("Division : " + response.data.Divison);
      })
      .catch((e) => console.log(e));
  };

  return (
    <>
      <div className="the-container">
        <div className="container">
          <h1>Calculator</h1>
          <form name="calculator">
            <table>
              <tr>
                <td>
                  <input
                    type="number"
                    onChange={OnChange}
                    className="input"
                    placeholder="Enter Number 1"
                    name="Number 1"
                  ></input>
                </td>
              </tr>
              <tr>
                <td>
                  <input
                    onChange={OnChange2}
                    className="input"
                    type="number"
                    placeholder="Enter Number 2"
                    name="Number 2"
                  ></input>
                </td>
              </tr>
            </table>
          </form>
          <button onClick={handleChangeAddition} className="btn">
            +
          </button>
          <button onClick={handleChangeSubtraction} className="btn">
            -
          </button>
          <button onClick={handleChangeMultiplication} className="btn">
            *
          </button>
          <button onClick={handleChangeDivision} className="btn">
            /
          </button>
          <output className="output" name="Output">
            {result}
          </output>
        </div>
      </div>
    </>
  );
}
