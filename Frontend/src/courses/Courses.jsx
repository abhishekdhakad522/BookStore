import React, { useEffect, useState } from 'react'
import { Course } from '../components/Course'
import { Navbar } from '../components/Navbar'
import { Footer } from '../components/footer'

function Courses() {
    
    return (
    <>
    <Navbar />
    <div className='min-h-screen '>
     <Course />
    </div>
     <Footer/>
     </>
  )
}

export default Courses