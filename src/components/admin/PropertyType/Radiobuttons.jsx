import React from 'react'

function Radiobuttons({SetFieldText,setDivClicked}) {
  return (
    <div className='self-center'>

        <form action="">

            <input type="radio" name="apt" id="apt" className='mb-3 mr-3' onClick={()=>{
                SetFieldText('Apartment')
                setDivClicked(false)
            }}/>
            <label htmlFor="apt">
                Apartment
            </label>
            <input type="radio" name="house" id="house" className='mb-3 mx-3' onClick={()=>{
                SetFieldText('House')
                setDivClicked(false)
            }}/>
            <label htmlFor="house">
                House
            </label>
            <input type="radio" name="land" id="land" className='mb-3 mx-3' onClick={()=>{
                SetFieldText('Land')
                setDivClicked(false)
            }}/>
            <label htmlFor="land">
                Land
            </label>
        </form>
    </div>
  )
}

export default Radiobuttons