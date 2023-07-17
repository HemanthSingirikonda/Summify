import React from 'react'
import {logo} from '../assets'

const Hero = () => {
  return (
    <header className='w-full flex justify-center items-center flex-col'>
        <nav className='flex justify-between items-center w-full mb-10 pt-3'>
            <img src={logo} className='w-28 object-contain'></img>
            <button type='button' 
              onClick={()=>{window.open('https://github.com/HemanthSingirikonda')}}
              className='black_btn'
            >Github</button>
        </nav>
        <h1 className='title-text head_text'>
            Summarize Articles with <br className='max-md:hidden'/>
            OpenAI GPT-4
        </h1>
        <h2 className='desc'>Simplify your reading with Summify,an application that transforms lengthy articles into concise and clear summaries.</h2>
    </header>
  )
}

export default Hero