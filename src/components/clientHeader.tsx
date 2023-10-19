"use client"
import { useState, ChangeEvent } from 'react'
import * as React from 'react';


type clientHeaderProps = {
  addClient:(name:string , address:string) => void

}

const ClientHeader = ({addClient} : clientHeaderProps) => {

  const [inputName, setInputName] = useState("")

  const [inputAddress, setInputAddress] = useState("")



  function saveName(inputElement: ChangeEvent<HTMLInputElement>) {
    setInputName(inputElement.target.value)
  }

  function saveAddress(inputElement: ChangeEvent<HTMLInputElement>) {
    setInputAddress(inputElement.target.value)
  }

  return (
    <main>
      <div className='inputComponent'>
      Nome:<input className='inputName' type="text" onChange={saveName}/>   
      Endereço:<input className='inputAddress' type="text" onChange={saveAddress}/>

        </div>

        <div className='clientHeaderButtons'>
        <button className='addButton' onClick={() => addClient}>+</button>

        <button className='resetButton' >🔄</button>
        </div>
      


      
        

   
    </main>
  )
};

export default ClientHeader;

