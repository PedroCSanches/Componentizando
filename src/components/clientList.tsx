"use client "
import { clientType } from '@/app/page'
import { useState } from 'react'

type clientPropsType = {
    clientDataList:Array<clientType>
    removeClient:(index:number) => void
}

export default function clientList({clientDataList,removeClient}: clientPropsType) {


    return (

        <main>

       {/* topo lista de Clientes */}
       <div className='topClientList'>


       <div className='nameTopClientList'>Name</div>
 
       <div className='addressTopClientList'>CPF</div>
 
     </div>
     {/* lista de Clientes */}
 
     {clientDataList.map((client, index) =>
     
     <div key={index} className='List'>
 
       <div className='name'>{client.name}</div>
 
       <div className='cpf'>{client.address}</div>
     

       <div  className='actions'>
            <button onClick={() => removeClient(index)}>delete</button>
       </div>
     </div>


     )}

    </main>

     )
}