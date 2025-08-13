import React from 'react'
import Header from '../../components/Header'

export default function Home() {
  return (
    <div>
        <Header/>

        <section className='flex justify-center items-center mt-13'>
            <div>
                <input  className='bg-white border-none outline-none pl-2 w-80 h-9 text-[16px]
                text-gray-600' 
                type="text" placeholder='Informe o nome do filme' required/>

                <button  className='bg-gradient-to-r from-blue-300 via-blue-700
                to-blue-950 h-9 w-23 ml-1 text-white cursor-pointer 
                transition-colors duration-500 ease-in-out  transform hover:-translate-y-[1px]
                hover:scale-[1.01]'
                >Buscar</button>
            </div>
        </section>
    </div>
  )
}
