import { Checkbox, FormControlLabel, FormGroup } from '@mui/material'
import React, { useEffect, useState } from 'react'



const userData = [
  { name: "Rod Hand" },
  { name: "Rod Rolfson DVM" },
  { name: "Curt McKenzie" },
  { name: "Juliet Bogisich" },
  { name: "Clifton Rowe" }
];




export const CheckList = (  ) => {

   const [users, setUsers] = useState([]);

  useEffect(() => {
    setUsers(userData);
  }, []);

  const handleChange = (e) => {
    const { name, checked } = e.target;
    if (name==='allselect') {
      let tempUser = users.map((user) => {
        return { ...user, isChecked: checked };
      });
      setUsers(tempUser);
    } else {
      let tempUser = users.map((user) =>
        user.name === name ? { ...user, isChecked: checked } : user
      );
      setUsers(tempUser);
    }
  };


    return (
        <>
        <FormGroup  >
        {users.map((user) => (   
      <FormControlLabel
           
           name={user.name}
              checked={user?.isChecked || false}
              onChange={handleChange}  
       control={<Checkbox   />}
       
        label={user.name}  />
        
        
     
        ))}

        </FormGroup>
        </>
    )
}
