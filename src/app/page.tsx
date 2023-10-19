"use client"
import { useState } from 'react'
import ClientHeader from "../components/clientHeader";
import ClientList from "../components/clientList";
import Link from 'next/link';





export default function Home() {

  return (
    <main >

    <Link href='/v1'>v1</Link>
    <br />

    <Link href='/v2'>v2</Link>

    </main>
  )
}
