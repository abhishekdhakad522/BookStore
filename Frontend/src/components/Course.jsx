import { Cards } from "./Cards"
import listUrl from '../../public/list.json?url'
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import axios from 'axios';

export const Course = () => {

  // const [list, setList] = useState([]);

  // useEffect(() => {
  //   fetch(listUrl)
  //     .then(res => res.json())
  //     .then(data => setList(data))

  // }, []);
  // console.log(list);

const [book, setBook] = useState([]);
useEffect(()=>{
  const getBook = async ()=>{
    try {
           const response = await axios.get('http://localhost:3000/book');
        // console.log(`Data fetch sucess from backend \n ${response.data}`);
        
           setBook(response.data);
    } catch (error) {
      console.log(`Axios Error: ${error}`);
      
    }
  }

  getBook();
},[])

  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 ">
        <div className="mt-30 elems-center justify-center text-center">
          <h1 className="text-2xl  md:text-4xl">We're delighted to have you <span className="text-pink-400">Here : )</span></h1>
          <p className="mt-8 md:mt-13">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti eum quia dolorem dolor
            deserunt necessitatibus repellendus quod. Minima suscipit explicabo fugit iste excepturi
            beatae ab dicta, vitae nam, at minus! Quas error veritatis alias quam ipsam. Illo laboriosam
            est magnam quae, ratione delectus autem eos? Eius dicta tempore iure dignissimos!
          </p>
          <Link to="/" >
          <button className="mt-6 bg-pink-500  text-white rounded-md px-4 py-2 hover:bg-pink-700 duration-300 hover:px-5 py-3"> Back</button>
          </Link>
        </div>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-4 justify-items-center items-center">
          {
            book.map((elem) => {
              return <Cards item={elem} key={elem.id} />
            })
          }

        </div>

      </div>
    </>
  )
}

