import React from 'react'
import Form from './form'

const Background = () =>{
    return(
       <section className='split'>
           <div className="background1">    
                <Form className="teste"/>
            </div>
           <div className='background2'></div>
       </section>
    )
}




const body = ()=>{
    return(
       <div>
           <Background/>
       </div>
    )
}

export default body

