"use client"
import { useState, ChangeEvent } from 'react'
import { clientType } from '@/common/types'
import * as React from 'react';


type clientHeaderProps = {
  addClient: (name:string , address:string) => void
  selectedClient: clientType | null
}

const ClientHeader = ({selectedClient, addClient} : clientHeaderProps) => {

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

  React.useEffect(()=>{
    if(selectedClient != null){
      setInputName(selectedClient.name)
      setInputAddress(selectedClient.address)
    }

  }, [selectedClient])

  return (
    <main>
      <div className='inputComponent'>
      Nome:<input className='inputName' type="text" value={inputName} onChange={saveName}/>   
      Endereço:<input className='inputAddress' type="text" value={inputAddress} onChange={saveAddress}/>

        </div>

        <div className='clientHeaderButtons'>
        {selectedClient ==null && <button className='addButton' onClick={addNewClient}>+</button>}
        {selectedClient != null  && <button className='editbutton'>edit</button>}

        <button className='resetButton' onClick={reset}>🔄</button>
        </div>
      


      
        

   
    </main>
  )
};

export default ClientHeader;

