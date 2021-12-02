import React, { useState } from "react";
import axios from "axios";

const Read = () => {
  const [recievedName, setName] = useState();
  const [age, setAge] = useState();
  const [phone, setPhone] = useState();
  const [address, setAddress] = useState();
  const [id, setId] = useState();
  const OnChangeID = (event) => {
    return setId(event.target.value);
  };

  const handleChange = async () => {
    axios
      .get(`https://immense-badlands-43639.herokuapp.com/DB/Read/${id}`, {})
      .then((response) => {
        setName(response.data[0].name);
        setAge(response.data[0].age);
        setPhone(response.data[0].phone);
        setAddress(response.data[0].address);
      })
      .catch((e) => console.log(e));
  };

  return (
    <div className="reading-container">
      <div className="read-container">
        <h3>Name : {recievedName} </h3>
        <h3>Age : {age} </h3>
        <h3>Phone : {phone}</h3>
        <h3>Address : {address}</h3>
      </div>
      <div className="id-block">
        <h1> Read Data</h1>
        <form>
          <table>
            <tr>
              <td>
                <label> Enter Selecting ID : </label>
              </td>
              <td>
                <input
                  onChange={OnChangeID}
                  type="text"
                  placeholder="Enter ID you want to Read"
                ></input>
              </td>
            </tr>
          </table>
        </form>
        <button onClick={handleChange} className="delete-btn">
          Read
        </button>
      </div>
    </div>
  );
};

export default Read;
