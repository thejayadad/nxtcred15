import React from 'react'
import SignIn from './sign-in'

const Hero = () => {
  return (
    <div className="text-white py-20 px-6 sm:px-12 lg:px-24 bg-gradient-to-r from-teal-400 to-indigo-600">
      <div className="relative container mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-4">
          Book Your Training Sessions with Ease
        </h1>
        <p className="text-lg sm:text-xl lg:text-2xl mb-6 max-w-3xl mx-auto">
          Discover expert trainers, book personalized sessions, and level up your skills, all in one place.
        </p>
        <div>
          <SignIn />
         </div>
      </div>
    </div>
  )
}

export default Hero
