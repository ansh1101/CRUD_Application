import React, {useState} from 'react';
import axios from 'axios';

const port = process.env.PORT || 3001

const Read = () => {

    const [recievedName ,setName ] = useState();
    const [age ,setAge ] = useState();
    const [phone ,setPhone ] = useState();
    const [address ,setAddress ] = useState();
  const [id, setId] = useState();
  const OnChangename = (event) => {
    return setId(event.target.value);
};

    const handleChange = () => {
        axios.get(`http://localhost:${port}/DB/Read/${id}`, {
         
      })
            .then(response => {
                setName(response.data[0].name);
                setAge(response.data[0].age);
                setPhone(response.data[0].phone);
                setAddress(response.data[0].address);
            }).catch(e => console.log(e))
    };
  
    return (

        <div className='crud-container'>
        <h1 >Read Data</h1>
        <form>
          <table>

            <tr>
              <td>
               <label > Enter ID  : <input onChange={OnChangename} type="text" placeholder='Enter ID Of the Person'></input></label> 
              </td>
            </tr>
           
          </table>
<output>  </output>
          
        </form>
        <button onClick={handleChange}> Read</button>
        <div>
          <p>Name : {recievedName}</p>
          <p>Age : {age}</p>
          <p>Phone : {phone}</p>
          <p>Address : {address}</p>
          </div>
      </div>
    
    );
}

export default Read;
