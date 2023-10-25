"use client "
import { clientType } from '@/common/types'
import { useState } from 'react'

type clientPropsType = {
    clientDataList:Array<clientType>
    removeClient:(index:number) => void
    edit: (index:number) => void

}

export default function clientList({clientDataList,removeClient,edit}: clientPropsType) {




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
            <button onClick={() => edit(index)}>editar</button>
       </div>
     </div>


     )}

    </main>

     )
}