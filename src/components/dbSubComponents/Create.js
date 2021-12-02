import axios from "axios";

import React, { useState } from "react";
import DBManagement from "../DBManagement";
import { InfoSchema } from "./InfoSchema";

const Create = () => {
  const [studentData, setStudentData] = useState([]);

  const [result, setResult] = useState();
  const [error, setError] = useState();
  const [id, setID] = useState();
  const OnChangeID = (event) => {
    return setID(event.target.value);
  };
  const [name, setName] = useState();
  const OnChangename = (event) => {
    return setName(event.target.value);
  };
  const [age, setAge] = useState();
  const OnChangeAge = (event) => {
    return setAge(event.target.value);
  };
  const [phone, setPhone] = useState();
  const OnChangePhone = (event) => {
    return setPhone(event.target.value);
  };
  const [address, setAddress] = useState();
  const OnChangeAddress = (event) => {
    return setAddress(event.target.value);
  };

  const restAPI = "https://immense-badlands-43639.herokuapp.com/DB/";

  const handleChange = async () => {
    try {
      const response = await axios.post(`${restAPI}Create`, {
        _id: parseInt(id),
        name: name,
        age: parseInt(age),
        phone: parseInt(phone),
        address: address,
      });
      setResult(response.data.Response);
      document.getElementById("out").style.display = "inline";
      setTimeout(() => {
        document.getElementById("out").style.display = "none";
      }, 3000);
    } catch (err) {
      console.log(err);
    }
    console.log("working good");
    const response = await axios.get(`${restAPI}Read`);
    try {
      const stud = response.data;
      setStudentData(stud);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="crud-container">
      <div id="read-container">
        <InfoSchema />
        {studentData.map((student) => {
          return (
            <div className="blocks">
              <h5>{student._id}</h5>
              <h5>{student.name}</h5>
              <h5>{student.age}</h5>
              <h5>{student.phone}</h5>
              <h5>{student.address}</h5>
            </div>
          );
        })}
      </div>
      <div id="create-container">
        <form>
          <h1>Create</h1>
          <table>
            <tr>
              <td>
                <label> Enter ID : </label>
              </td>
              <td>
                <input onChange={OnChangeID} type="number"></input>
              </td>
            </tr>
            <tr>
              <td>
                <label> Enter Name : </label>
              </td>
              <td>
                <input
                  onChange={OnChangename}
                  type="text"
                  placeholder="e.g : Sam, Baldor, William"
                ></input>
              </td>
            </tr>
            <tr>
              <td>
                <label> Enter Age : </label>
              </td>
              <td>
                <input
                  onChange={OnChangeAge}
                  type="number"
                  placeholder="e.g ; 12, 19, 20, 17..."
                ></input>
              </td>
            </tr>
            <tr>
              <td>
                <label> Enter Phone : </label>
              </td>
              <td>
                <input
                  onChange={OnChangePhone}
                  type="number"
                  placeholder="e.g : 911231, 8711231, 97611"
                ></input>
              </td>
            </tr>
            <tr>
              <td>
                <label> Enter Address : </label>
              </td>
              <td>
                <input
                  onChange={OnChangeAddress}
                  type="text"
                  placeholder="e.g : 124, Blecker Street"
                ></input>
              </td>
            </tr>
          </table>
        </form>
        <button className="handle-btn" onClick={handleChange}>
          Create
        </button>
        <p id="out">{result}</p>
        <p>{error}</p>
      </div>
    </div>
  );
};

export default Create;
