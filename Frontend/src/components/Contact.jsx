// import React from 'react'

import { Navbar } from "./Navbar"

export const Contact =()=> {
  return (
    <>
    <Navbar/>

    <div className="flex items-center justify-center min-h-screen pt-20 bg-gradient-to-br from-blue-100 via-white to-pink-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      <div className="w-full max-w-md bg-white dark:bg-slate-800 shadow-lg rounded-2xl p-8">
        <form>
          <h1 className="font-bold text-2xl text-center mb-6 text-blue-700 dark:text-blue-400">Contact Us</h1>
          <label className="block text-sm font-semibold mb-1 ml-1 text-gray-700 dark:text-gray-200">Name</label>
          <input type="text"
            placeholder="Enter your name"
            className="w-full border border-gray-300 rounded-md p-2 mb-4 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-400 dark:bg-slate-700 dark:text-gray-100 dark:border-slate-500 placeholder:text-gray-400 dark:placeholder:text-gray-400" />
          <label className="block text-sm font-semibold mb-1 ml-1 text-gray-700 dark:text-gray-200">Email</label>
          <input type="email"
            placeholder="Email address"
            className="w-full border border-gray-300 rounded-md p-2 mb-4 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-400 dark:bg-slate-700 dark:text-gray-100 dark:border-slate-500 placeholder:text-gray-400 dark:placeholder:text-gray-400" />
          <label className="block text-sm font-semibold mb-1 ml-1 text-gray-700 dark:text-gray-200">Message</label>
          <textarea
            className="w-full border border-gray-300 rounded-md p-2 mb-4 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-400 dark:bg-slate-700 dark:text-gray-100 dark:border-slate-500 placeholder:text-gray-400 dark:placeholder:text-gray-400"
            placeholder="Type your message" rows={4}></textarea>
          <button type="submit"
            className="w-full bg-blue-600 text-white p-2 rounded-md mt-2 hover:bg-blue-700 transition font-semibold shadow-md">
            Submit
          </button>
        </form>
      </div>
    </div>

   
    </>
  )
}
