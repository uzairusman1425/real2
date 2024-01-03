import React, { useState } from 'react'
import Radiobuttons from '../../../AVM/body/PropertyType/Radiobuttons'

function Modalproperty({SetFieldText,setDivClicked}) {

    const [buttonType,setButtonType] = useState('residential')
    

  return (
    <>
    <div className='relative'>
        <div className='absolute bg-white drop-shadow-xl min-w-[21rem] w-auto  h-auto flex flex-col z-20'>
            <p className='text-xs m-3 font-bold'>PROPERTY TYPE</p>

            <div className='self-center'>
                <button className='ml-3 mb-5 bg-gray-100 px-8 py-2 font-light text-gray-500 rounded-l-lg'  style={{
                    backgroundColor: `${buttonType==='residential' ? 'red' :'rgb(243,244,246)'}`,
                    color: `${buttonType==='residential' ? 'white':'rgb(107,114,128)'}`
                }} onClick={()=>{setButtonType('residential')}}>Residential</button>
                <button className='mr-3 mb-5 bg-gray-100 px-8 py-2 font-light text-gray-500 rounded-r-lg ' style={{
                    backgroundColor: `${buttonType==='commercial' ? 'red' :'rgb(243,244,246)'}`,
                    color: `${buttonType==='commercial' ? 'white':'rgb(107,114,128)'}`
                }} onClick={()=>{setButtonType('commercial');SetFieldText('Commercial')}}>Commercial</button>
            </div>

            {buttonType==='residential' && <Radiobuttons setDivClicked={setDivClicked} SetFieldText={SetFieldText} />}
            
        </div>
    </div>
    <div className='static'>
    <div className='absolute w-screen h-screen top-0 left-0  z-10 ' onClick={()=>{setDivClicked(false)}}>
        
    </div>
    </div>
    
   
    </>
  )
}

export default Modalproperty