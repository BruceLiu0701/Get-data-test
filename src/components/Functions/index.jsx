import React from 'react'

const Functions=({userInput})=>{

    return(
        <div className='flex justify-between items-center w-full mb-4'>
            <div className=' flex-1'>
                <button className='px-2 py-1 bg-success rounded-md text-white hover:shadow-btnShadow'>新增</button>
                <label htmlFor="items" className='ml-4'>一次顯示幾個 : </label>
                <select name="" id="items" className=' text-sm '>
                  <option value="10">10</option>
                </select>
            </div>
            <div className='flex justify-end items-center border border-solid border-blue-900 rounded-2xl'>
                <input type="text" placeholder='請輸入要查詢資料SID' onInput={(e)=>userInput(e.target.value)}
                className=' focus:outline-none bg-transparent py-1 px-2 indent-2 border-none text-sm placeholder:text-black'/>
                <span className="material-symbols-outlined px-1 cursor-pointer">search</span>
            </div>
        </div>
    )
}
export default Functions
