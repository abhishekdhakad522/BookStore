// import React from 'react'

import { Navbar } from "./Navbar"

export const About = () => {
  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 via-white to-pink-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 px-4">
        <div className="max-w-2xl bg-white dark:bg-slate-800 shadow-lg rounded-2xl p-8 mt-10 mb-10">
          <h1 className="text-3xl font-bold text-blue-700 dark:text-white mb-4 text-center">About Us</h1>
          <p className="text-gray-700 dark:text-gray-200 text-lg mb-6 text-center">
            Welcome to BookStore! We are passionate about providing quality books and resources to help you learn and grow every day. Our mission is to make learning accessible, engaging, and enjoyable for everyone.
          </p>
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-blue-600 dark:text-blue-300 mb-2">Our Story</h2>
            <p className="text-gray-600 dark:text-gray-300">
              Founded in 2026, BookStore started as a small project to share free and affordable books with students and lifelong learners. Today, we offer a wide range of books, courses, and resources to support your educational journey.
            </p>
          </div>
          <div>
            <h2 className="text-xl font-semibold text-blue-600 dark:text-blue-300 mb-2">Owner</h2>
            <ul className="flex flex-wrap gap-4 justify-center mt-4">
              <li className="bg-blue-100 dark:bg-slate-700 rounded-lg px-4 py-2 font-medium text-blue-800 dark:text-white shadow">Abhishek Dhakad</li>
              
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}
