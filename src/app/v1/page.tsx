"use client"
import { useState, ChangeEvent } from 'react'
import Link from "next/link";
import styles from "./v1.module.css"



type v1ClientType = {
    name: string
    address: string
}

export default function v1() {

    const [inputName, setInputName] = useState("")

    const [inputAddress, setInputAddress] = useState("")

    const [clientList, setClientList] = useState<Array<v1ClientType>>([])


    function saveName(inputElement: ChangeEvent<HTMLInputElement>) {
        setInputName(inputElement.target.value)
    }

    function saveAddress(inputElement: ChangeEvent<HTMLInputElement>) {
        setInputAddress(inputElement.target.value)
    }

    function addClient() {

        clientList.push({
            name:inputName,
            address:inputAddress
        })

        setClientList([...clientList])
    }

    function reset() {
     setInputName("")
     setInputAddress("")
        
    }

    function remove(index:number) {
        clientList.splice(index,1)

        setClientList([...clientList])
    }

    return (
        <main className={styles.main}>
        <Link href='/'>Home</Link>


            <div className={styles.container}>
                 

                <div className={styles.dados}>

                    <div className={styles.dadosInput}>

                        Name:<input type="text" className={styles.nameDados} value={inputName} onChange={saveName}/>
                        
                        Address:<input type="text" value={inputAddress}  onChange={saveAddress}/>
                    </div>

                    <div className={styles.dadosButtons}>

                    <button className={styles.add} onClick={addClient}>+</button>

                    <button className={styles.reset} onClick={reset}>Reset</button>

                    </div>

                </div>


                <div className={styles.List}>

                        <div className={styles.listTop}>

                        <div className={styles.nameListTop}>Name</div>

                        <div className={styles.addressListTop}>Address</div>

                        <div className={styles.action}>Actions</div>
                    </div>


                    {clientList.map((client, index) =>
                    <div key={index} className={styles.clientList}>

                        <div className={styles.nameClientList}>{client.name}</div>

                        <div className={styles.addressClientList}>{client.address}</div>

                        <div className={styles.actions}>

                        <button className={styles.delte}  onClick={() => remove(index)}>delete</button>

                        </div>

                    </div>
                    )}

                </div>


            </div>



        </main>
    )
}