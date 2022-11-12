import React, { useState } from 'react'

export default function Burger({ burger }) {
    const [Quantity, setQuantity] = useState(1)
    const [varients, setvarients] = useState('small')
    const [show, setShow]= useState(false);
    const handleClose=()=>setShow(false);
    const handleShow =() => setShow(true);
    return (
       <div>
            <h1>{burger.name}</h1>
            <img src={burger.image} className="img=fluid" style={{ height: '200px', width: '300px' }} />
        
            <div className='flex-container'>

                <div className='w-100'>
                    <p> Varients</p>

                    <select className='form-control' value={varients} onChange={(e) => { setvarients(e.target.value) }}>
                        {burger.varients.map(varient => {
                            return <option value={varient}>{varient}</option>
                        })}

                    </select>
                </div>
                <div className='w-100'>
                    <p>Quantity</p>
                            <select className='form-control' value={Quantity} onChange={(e)=>{setQuantity(e.target.value)}}>
                        {[...Array(10).keys()].map((x, i) => {

                            return <option value={i + 1}>{i + 1}</option>
                        })}
                    </select>
                    </div>
                    <div className="flex-container" >
                        <div className='m-1 w-100'>
                            <div>
                                <h1 className='mt-1'>Price: {burger.prices[0][varients] * Quantity} </h1>
                            </div>
                            <div className='m-1 w-100'>
                                <button className="btn">Add to cart</button>
                            </div>
                        </div>
                    </div>
                    
                </div >
                
            </div>
    )
}

