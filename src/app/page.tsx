"use client"
import { useState } from 'react'
import ClientHeader from "../components/clientHeader";
import ClientList from "../components/clientList";


{/* tipo do array */}
export type clientType = {
  name:string
  address:string
}



export default function Home() {


  const [clientDataList , setClientDataList] = useState<Array<clientType>>([
    {
        name: "Pedro",
        address: "Rua Carlos Eduardo, 204"
    },
    {
      name: "Luis",
      address: "Rua Colombia, 26"
    },
    {
      name: "Bernardo",
      address: "Rua Capinas , 100" 
    },

  ])

function addClient() {
  
}

function removeClient(index:number) {
  clientDataList.splice(index,1)

  setClientDataList([...clientDataList])
} 

  return (
    <main >

      <ClientHeader addClient={addClient} />

      <ClientList  clientDataList={clientDataList} removeClient={removeClient}/>


    </main>
  )
}
