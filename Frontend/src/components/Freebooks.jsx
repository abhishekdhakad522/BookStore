
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import listUrl from '../../public/list.json?url'
import { Cards } from "./Cards";
import { useEffect, useState } from "react";
import axios from "axios";

export const Freebooks = () => {
    // const [list, setList] = useState([]);

    // useEffect(() => {
    //     fetch(listUrl)
    //         .then(res => res.json())
    //         .then(data => setList(data));
    // }, []);

    const [filterBook, setFilterBook] = useState([]);
    useEffect(() => {
        const getBook = async () => {

            try {
                const response = await axios.get("http://localhost:3000/book");
                // console.log(response.data);
                setFilterBook(response.data.filter((data) => data.category === "free"));
            } catch (error) {
                console.log(`Error to fetch data from Backend ${error}`);
                
            }
        }

        getBook();

    }, []);

    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: false,
                    dots: true,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: false,
                    dots: true,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: false,
                    dots: true,
                },
            },
        ]
    };

    // const filterData = list.filter((data) => data.category === "free");

    // console.log(filterData);


    return (
        <>
            <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 '>
                <div>
                    <h1 className='text-2xl font-bold pb-2'>Free Offered Courses</h1>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime commodi error suscipit doloribus dignissimos. Harum accusamus est animi illo possimus?</p>

                </div>

                <div className="pt-5 px-0 sm:px-4">
                    <Slider {...settings}>
                        {
                            // filterData.map((item) =>
                            filterBook.map((item) =>
                                <Cards item={item} key={item.id} />)
                        }
                    </Slider>
                </div>
            </div>
        </>
    )
}

