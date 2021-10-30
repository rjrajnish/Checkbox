import React, { useEffect, useState } from 'react'
import { CheckList } from './CheckList'
 import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
 

 

 
export const AllSelect = () => {
const [users, setUsers] = useState([]);

 const handleSelect=  (e) => {
     
    const { name, checked } = e.target;
     if (name==='allselect') {
      let tempUser = users.map((user) => {
        return { ...user, isChecked: checked };
      });
      setUsers(tempUser);
     }
  }; 



    return (

 
        <div  >
            <h2>Indeterminate Checkbox</h2>
             <hr></hr>
               <FormControlLabel control={<Checkbox  />}
             onSelect={handleSelect}
             name='allselect'
                label= 'All select' 
              />
              
              <CheckList />

  

        </div>
    )
}
