import React from 'react'
import Logo from './logo'
import Link from 'next/link'

const Header = () => {
  return (
    <header className='h-20 border-b-2 w-full border-slate-200 px-4'>
        <div className='lg:max-w-screen-lg mx-auto flex items-center justify-between h-full'>
            <div className='pt-8 pl-4 pb-7 flex items-center gap-x-3'>
                <Logo />
                <h1 className='text-xl lg:text-2xl font-extrabold text-gray-500'>
                    BookSite
                </h1>
            </div>
            <div className='flex items-center space-x-4'>
                <button className='btn btn-sm -active btn-neutral'>
                    <Link href={'/signup'}>
                        SignUp
                    </Link>
                </button>
              </div>
        </div>
    </header>
  )
}

export default Header