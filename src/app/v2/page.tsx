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

  setSelectedClient(clientDataList[index])



}

  return (
    <main >
    
      <Link href='/'>Home</Link>

      <ClientHeader addClient={addClient} selectedClient={}  />

      <ClientList  clientDataList={clientDataList} removeClient={removeClient} />


    </main>
  )
}
