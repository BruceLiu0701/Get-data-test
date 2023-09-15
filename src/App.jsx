import React,{useState,useEffect} from 'react'
import axios from 'axios'
import Items from './components/Items'
import Functions from './components/Functions'

const App=()=>{

  const [data,setData]=useState([])     // 存取網路請求獲得的數據
  const [page,setPage]=useState(0)      // 更改第幾頁的狀態
  const [search,setSearch]=useState(0)  // 搜尋SID狀態
  const total= (page+1)*10 
 
  //查詢用戶輸入
  const userInput=(value)=>{
    if(Number(value)<=data.length&&Number(value)>=1)setSearch(Number(value))
    else if(value==='')setSearch(0)
  }
  // 更改哪一頁
  const changePage=(num)=>{
    return (e)=>{
      if(num==='last'&& page-1>=0){
        setPage(page=>page-1)
      }else if (num==='next' && page+1<=Math.floor(data.length/10)){ // 狀態0到13共14頁, 故page+1不能超過13
        setPage(page=>page+1)
      }else if(Number(num)&& page+num<=Math.floor(data.length/10)){
        setPage(page=>page+num)
      }
    }
  }
  // 回到首頁
  const goBackFirst=(param)=>{
    return ()=>{
      setPage(param)
    }
  }
  // 發第一次請求獲得TokenKey
  const getData=()=>{
    axios.get('http://cloud.weyutech.com/API_TEST/api/WeyuLogin',{
      headers:{
        UID:'DEMO',
        PWD:'DEMO'
      }
    })
    .then(response=>{
      return getInfo(response.data.TokenKey)
    })
    .catch((error)=>{
      alert(error);
    })
  }
  // 發第二次請求獲取數據
  const getInfo=(TokenKey)=>{
    axios({
      headers:{
        SID:'323017369146913',
        TokenKey
      },
      method:'post',
      url:'http://cloud.weyutech.com/API_TEST/api/GetGrid'
    })
    .then(response=>{
      // console.log(response.data.Grid_Data)
      setData(response.data.Grid_Data)
    })
    .catch((error)=>{
      alert(error)
    })
  }
  useEffect(()=>{
    getData();
  },[])

  return(
    <section className=' px-6 py-8 flex flex-col justify-start items-center bg-blue-200 shadow-boxShadow'>
        <div className='mb-6'>
          <h2 className=' text-2xl font-bold'>數據表格</h2>
        </div>
        <Functions userInput={userInput}/>
      <table className=' bg-blue-500 mb-4'>
          <thead>
              <tr className=' border-b border-white border-solid'>
                  <td className='px-10 py-2 text-center font-bold font-english text-white'>SID</td>
                  <td className='px-10 py-2 text-center font-bold font-english text-white'>INT_TEST</td>
                  <td className='px-10 py-2 text-center font-bold font-english text-white'>CHAR_TEST</td>
                  <td className='px-10 py-2 text-center font-bold font-english text-white'>DATE_TEST</td>
                  <td className='px-10 py-2 text-center font-bold font-english text-white'>TIME_TEST</td>
              </tr>
          </thead>
          <tbody>{
            search?data.filter((value)=>{return value.SID===search}).map((value)=>{
              return <Items key={value.SID} SID={value.SID} INT_TEST={value.INT_TEST} CHAR_TEST={value.CHAR_TEST} DATE_TEST={value.DATE_TEST} TIME_TEST={value.TIME_TEST}/>
            })
            :data.filter((value)=>{return value.SID>=page*10+1 && value.SID<=total}).map((value)=>{
              return <Items key={value.SID} SID={value.SID} INT_TEST={value.INT_TEST} CHAR_TEST={value.CHAR_TEST} DATE_TEST={value.DATE_TEST} TIME_TEST={value.TIME_TEST}/>
            })
          }</tbody>
      </table>
      <ul className='flex justify-center items-center self-end'>
        <li className=' list' onClick={changePage('last')}>上一頁</li>
        <li className=' list ml-2' onClick={changePage(0)}>{page+1}</li>
        <li className=' list ml-2' onClick={changePage(1)}>{page+2>14?'-':page+2}</li>
        <li className=' list ml-2' onClick={changePage(2)}>{page+3>14?'-':page+3}</li>
        <li className=' bg-gray-100 py-1 px-3 border border-gray-400 rounded-md cursor-not-allowed ml-2'>...</li>
        <li className=' list ml-2' onClick={goBackFirst(13)}>14</li>
        <li className=' list ml-2' onClick={changePage('next')}>下一頁</li>
        <li className=' list ml-2' onClick={goBackFirst(0)}>回首頁</li>
      </ul>
    </section>
  )
}
export default App
