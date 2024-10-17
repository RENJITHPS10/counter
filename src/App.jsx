import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import {  changeRange, decrement, increment, reset } from './redux/counterSlice'
import { useState } from 'react'

function App() {
  const count=useSelector((state)=>state.counter.value)
  const [range,setRange]=useState('')
  const dispatch = useDispatch()
console.log(range)
  
 
  return (
    <>
      <div className='bg-slate-950 h-screen'>
        <div className='flex cols flex-row justify-center  h-full items-center '>
          <div className=' bg-white  rounded-md md:w-1/3 w-full'>
            <h1 className='text-5xl text-center mt-10 text-blue-600 font-semibold'>Counter Application</h1>
            <h1 className='text-9xl text-center mt-16' >{count}</h1>
            <div className='flex justify-evenly mt-14'>
              <button onClick={() => dispatch(decrement())} className='bg-yellow-500 rounded-lg p-2 hover:bg-yellow-700 font-bold text-slate-100'>Decrement</button>
              <button onClick={() => dispatch(reset())} className='bg-red-500 rounded-lg p-2 hover:bg-red-700 font-bold text-slate-100'>Reset</button>
              <button onClick={() => dispatch(increment())} className='bg-green-600 rounded-lg p-2 hover:bg-green-700 font-bold text-slate-100'>Increment</button>
            </div>
            <div className='flex justify-center items-center'>
              <input
                type="text"
                className='my-5 w-2/3 h-10 px-3 py-2 border-2 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-blue-600 transition duration-300'
                style={{ outline: 'none' }}
                placeholder='Enter range' onChange={(e)=>setRange(e.target.value)}
              />

              <button className='bg-blue-500 px-4 py-2 rounded-lg ms-5 ' onClick={()=>dispatch(changeRange(Number(range)))}>click</button>
            </div>
          </div>
        </div>
      </div>


    </>
  )
}

export default App
