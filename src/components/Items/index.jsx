import React from 'react'

const Items=({SID,INT_TEST,CHAR_TEST,DATE_TEST, TIME_TEST})=>{

    return(
        <tr className={SID/10!==0 && 'bg-blue-900 border-b border-white border-solid even:bg-blue-500'} >
            <td className=' px-10 py-1 text-center text-white'>{SID}</td>
            <td className=' px-10 py-1 text-center text-white'>{INT_TEST}</td>
            <td className=' px-10 py-1 text-center text-white'>{CHAR_TEST}</td>
            <td className=' px-10 py-1 text-center text-white'>{DATE_TEST}</td>
            <td className=' px-10 py-1 text-center text-white'>{TIME_TEST}</td>
        </tr>
    )
}
export default Items