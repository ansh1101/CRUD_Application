import React from 'react'
import Create from './dbSubComponents/Create'
import Delete from './dbSubComponents/Delete'
import Read from './dbSubComponents/Read'
import Update from './dbSubComponents/Update'


export default function DBmodification() {
    return (
        <div className='db-container'>
            <h1 className='dbheading'>Database Management </h1>
            <Create />
            <Read />
            <Update />
            <Delete />
            
        </div>
    )
}
