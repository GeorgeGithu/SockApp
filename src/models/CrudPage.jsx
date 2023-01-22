import './CrudPage.css';

import React, { useState, useRef, useEffect } from 'react';


const LOCAL_STORAGE_KEY = 'socksApp.socks'


function CrudPage() {
    const [socks, setSocks] = useState ([])
    const shoppingChoice = useRef()

    useEffect(() => {
        const storedSocks = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
        if (storedSocks) setSocks(storedSocks)
    }, [])

    useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(socks))
    }, [socks])

    function toggleSock(id) {
        const newSocks = [...socks]
        const sock = newSocks.find(sock => sock.id === id)
        sock.complete = !sock.complete
        setSocks(newSocks)
    }

    function sendToCart(e) {
        const name = shoppingChoice.current.value
        if (name === '') return
        setSocks(prevSocks => {
            return [...prevSocks, {id: 1, name: name, }]
        })
        shoppingChoice.current.value = null
    }

    function deleteSocks() {
        const newSocks = socks.filter(sock => !sock.complete)
        setSocks(newSocks)
    }

    function SocksArray({ sock, toggleSock }) {
        function handleDeleteSock() {
            toggleSock(sock.id)
        }
        return (
            <div className='label'>
                <label >
                    <input className='label' type="checkbox" checked={sock.complete} onChange={handleDeleteSock} /> 
                    {sock.name}
                </label>
            </div>
        )
    }
    
    function ShoppingCart ({ socks, toggleSock }) {
        return (
            socks.map(sock => {
                return <SocksArray key={sock.id} toggleSock={toggleSock} sock={sock} />
            })
        )
    }

    return (
        <>
            <ShoppingCart socks={socks} toggleSock={toggleSock} />
            <div className='inputForm'>
                <input ref={shoppingChoice} placeholder="Type your sock name"/>
                <button className='inputBtn' onClick={sendToCart} >Add to shopping cart</button>
                <button className='inputBtn' onClick={deleteSocks}>Good by my lovely socks</button>
                <div>{socks.filter(sock => !sock.complete).length} socks in the shopping cart</div>
            </div>      
        </>
    )
    
}

export default CrudPage;
