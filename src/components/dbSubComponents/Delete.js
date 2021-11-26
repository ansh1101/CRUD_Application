import React, {useState} from 'react'
import axios from 'axios';


const port = process.env.PORT || 3001

const Delete = () => {

    const [id, setId] = useState();
    const OnChangeID = (event) => {
        return setId(event.target.value);
    };
    const [result , setResult] = useState();
const handleChange = () => {
        axios.delete(`http://localhost:${port}/DB/Delete?id=${id}`, {
        })
            .then(response => {
              setResult(response.data.message);
            }).catch(e => console.log(e))
    };
    return (
            <div className='crud-container'>
        <h1 >Delete Data</h1>
        <form>
          <table>

            <tr>
              <td>
               <label > Enter ID  : <input onChange={OnChangeID} type="text" placeholder='Enter ID you want to delete'></input></label> 
              </td>
            </tr>
           
          </table>
<output> </output>
          
        </form>
        <button onClick={handleChange}>Delete</button>
        <p>{result}</p>
      </div>
    );
}

export default Delete;
