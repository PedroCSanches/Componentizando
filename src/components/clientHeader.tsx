"use client"
import { useState, ChangeEvent } from 'react'
import { clientType } from '@/common/types'
import * as React from 'react';


type clientHeaderProps = {
  addClient:(name:string , address:string) => void
  selectedClient:Array<clientType>
}

const ClientHeader = ({selectedClient,addClient} : clientHeaderProps) => {

  const [inputName, setInputName] = useState("")

  const [inputAddress, setInputAddress] = useState("")



  function saveName(inputElement: ChangeEvent<HTMLInputElement>) {
    setInputName(inputElement.target.value)
  }

  function saveAddress(inputElement: ChangeEvent<HTMLInputElement>) {
    setInputAddress(inputElement.target.value)
  }

  function reset() {
    setInputName("")
    setInputAddress("")
  }

  function addNewClient() {
    addClient(inputName,inputAddress)
  }

  return (
    <main>
      <div className='inputComponent'>
      Nome:<input className='inputName' type="text" value={inputName} onChange={saveName}/>   
      Endereço:<input className='inputAddress' type="text" value={inputAddress} onChange={saveAddress}/>

        </div>

        <div className='clientHeaderButtons'>
        <button className='addButton' onClick={addNewClient}>+</button>
        <button className='editbutton'>edit</button>

        <button className='resetButton' onClick={reset}>🔄</button>
        </div>
      


      
        

   
    </main>
  )
};

export default ClientHeader;

