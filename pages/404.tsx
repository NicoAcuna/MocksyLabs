import Link from 'next/link'
import React from 'react'
import Button from '../components/core/button'

function FourOhFour() {

  return (
    <main className='p-[10%] bg-404-bg bg-no-repeat h-[900px]'>
        <div className='font-black text-[44px] mb-12 w-[60%] leading-[52px]'>Oopsie! Looks like you took a wrong turn</div>

        <Link href='/'>
          <Button text='Go back' className='btn-variant-white' onClick={() => null}/>
        </Link>
    </main>
  )
}

export default FourOhFour