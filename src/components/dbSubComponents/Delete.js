import React, { useState } from 'react'
import axios from 'axios';


const Delete = () => {

  const [id, setId] = useState();
  const OnChangeID = (event) => {
    return setId(event.target.value);
  };
  const [result, setResult] = useState();
  const handleChange = () => {
    axios.delete(`https://immense-badlands-43639.herokuapp.com/DB/Delete?id=${id}`, {
    })
      .then(response => {
        setResult(response.data.message);
        document.getElementById('out').style.display='inline'
        setTimeout(() => {
          document.getElementById('out').style.display ='none';
        }, 3000);
      }).catch(e => console.log(e))
  };
  return (
    <div className='delete-container'>
      <div className='delete'>
        <h1> Delete Data</h1>
        <form>
          <table>
            <tr>
              <td>
                <label> Enter ID: </label>
              </td>
              <td>
                <input onChange={OnChangeID} type="text" placeholder='Enter ID you want to delete'></input>
              </td>
            </tr>
          </table>
        </form>
        <button onClick={handleChange} className='delete-btn'>Delete</button>
       <p id='out'>{result}</p>
      </div>
    </div>
  );
}

export default Delete;

