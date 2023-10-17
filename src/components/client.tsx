"use client"
import { useState, ChangeEvent } from 'react'
import * as React from 'react';


{/* tipo do array */}
type ProfileProps = {
    name:string
    address:string
}

const Profile = ({name, address}:ProfileProps) => {
  const [inputName, setInputName] = useState("")
  const [inputAddress, setInputAddress] = useState("")

{/*const [client , setClient] = useState<Array<ProfileProps>>([])*/}
  function saveName(inputElement: ChangeEvent<HTMLInputElement>) {
    setInputName(inputElement.target.value)
  }

  function saveAddress(inputElement: ChangeEvent<HTMLInputElement>) {
    setInputAddress(inputElement.target.value)
  }

  return (
    <main>
      <div>
      <input type="text" onChange={saveName}/>   
      <input type="text" onChange={saveAddress}/>
    </div>
   
    </main>
  )
};

export default Profile;

