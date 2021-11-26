
import React, { useState } from 'react';
import axios from 'axios';

const port = process.env.PORT || 3001

const Update = () => {
 
    const [result , setResult ] = useState();


    const [name, setName] = useState();
    const OnChangeName = (event) => {
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
    
        const [id, setId] = useState();
        const OnChangeID = (event) => {
            return setId(event.target.value);
        };
const handleChange = () => {
            axios.put(`http://localhost:${port}/DB/Update/${id}`, {
                name : name,
                age : parseInt(age),
                phone : parseInt(phone),
                address : address
            })
                .then(response => {
                setResult(response.data.Data);
                }).catch(e => console.log(e))
        };




        return (
            <div className='crud-container'>
                <h1 >Update Data</h1>
                <form>
                    <table>
                        <tr>
                            <td>
                                <label > Enter Selection ID : <input onChange={OnChangeID} type='number' placeholder='Enter Selected ID'></input></label>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label > Enter Name  : <input onChange={OnChangeName} type="text" placeholder='Update Name'></input></label>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label > Enter Age :  <input onChange={OnChangeAge} type='number' placeholder='Update Age'></input></label>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label > Enter Phone  : <input onChange={ OnChangePhone} type='number' placeholder='Update Phone'></input></label>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label > Enter Address : <input  onChange={OnChangeAddress} type='text' placeholder='Update Address '></input></label>
                            </td>
                        </tr>
                        <tr>
                            <td>
                            </td>
                        </tr>
                    </table>


                </form>
                <button onClick={handleChange} >Update</button>
                <p> {result}</p>
            </div>
        );
    }

    export default Update;
