"use client"
import { useState } from 'react'
import ClientHeader from "../../components/clientHeader";
import ClientList from "../../components/clientList";
import "@/app/v2/v2.module.css"
import Link from 'next/link';
import { clientType } from '@/common/types';




export default function v2() {


  const [clientDataList , setClientDataList] = useState<Array<clientType>>([])

  const [selectedClient , setSelectedClient] = useState<clientType | null>(null)

  const [selectedIndex , setSelectedIndex] = useState(-1)

  function addClient(name:string, address:string) {

    clientDataList.push({
        name ,
        address
    })

    setClientDataList([...clientDataList])
    
}

function removeClient(index:number) {
  clientDataList.splice(index,1)

  setClientDataList([...clientDataList])
} 

function edit(index:number) {

  setSelectedIndex(index)
}

function saveEdit(name:string , address:string) {
  clientDataList[selectedIndex] = { name , address}

  setClientDataList([...clientDataList])

  setSelectedIndex(-1)
  console.log("passei no page")
}

  return (
    <main >
    
      <Link href='/'>Home</Link>

      <ClientHeader addClient={addClient} selectedClient={clientDataList[selectedIndex]}  saveEdit={saveEdit} />

      <ClientList  clientDataList={clientDataList} removeClient={removeClient} edit={edit}/>


    </main>
  )
}
