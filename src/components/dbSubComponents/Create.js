import axios from 'axios';
import React ,{useState } from 'react';
require("dotenv").config();
const port = process.env.PORT || 3001


const Create = () => {
  const [result , setResult] = useState();

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
  


  const handleChange = () => {
      axios.post(`http://localhost:${port}/DB/Create`, {
        _id : parseInt(id),
        name : name,
        age : parseInt(age),
        phone : parseInt(phone),
        address: address

    })
          .then(response => {
              setResult(response.data.Response);
             console.log(response.data.Response);
          }).catch(e => console.log(e))
  };


    return (
            <div className='crud-container'>
              <h1 >Create Data</h1>
              <form>
                <table>
                  <tr>
                    <td>
                     <label > Enter ID : <input  onChange={OnChangeID} type='number' placeholder='e.g : 1, 2, 3 ..'></input></label> 
                    </td>
                  </tr>
                  <tr>
                    <td>
                     <label > Enter Name  : <input  onChange={OnChangename}  type="text" placeholder='e.g : Sam, Baldor, William'></input></label> 
                    </td>
                  </tr>
                  <tr>
                    <td>
                     <label > Enter Age :  <input  onChange={OnChangeAge}  type='number' placeholder='e.g ; 12, 19, 20, 17...'></input></label> 
                    </td>
                  </tr>
                  <tr>
                    <td>
                     <label > Enter Phone  : <input   onChange={OnChangePhone} type='number' placeholder='e.g : 911231, 8711231, 97611'></input></label> 
                    </td>
                  </tr>
                  <tr>
                    <td>
                     <label > Enter Address : <input  onChange={OnChangeAddress}  type='text'placeholder='e.g : 124, Blecker Street'></input></label> 
                    </td>
                  </tr>
                  <tr>
                    <td>
                     <button onClick={handleChange}>Create</button>
                    </td>
                  </tr>

                </table>

                
              </form>
              <output>{result}</output>
            </div>
    );
}

export default Create;
