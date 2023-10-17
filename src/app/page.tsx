"use client"
import { useState } from 'react'
import Profile from "../components/client";
import Buttons from '@/components/buttons';



export default function Home() {




  return (
    <main >
      <Profile name="Pedroo" address="Rua Eduardo Cardoso,204" />
      <Buttons/>

       {/* topo lista */}
    <div className='list'>

      <div className='topList'></div>

      <div className='nameTopList'>Name</div>

      <div className='addressTopList'>CPF</div>

    </div>
    </main>
  )
}
