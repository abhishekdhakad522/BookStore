

export const Cards = ({item}) => {
    // console.log(item.image);
    
    return (
        <>
            <div className='mt-10 px-2 my-5  hover:scale-105 duration-300'>
                <div className="card bg-base-100 w-full max-w-96 h-auto shadow-xl flex flex-col ">
                    <figure className="h-80 overflow-hidden">
                        <img
                            src={item.image}
                            alt="Shoes"
                            className="w-full h-full object-cover" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            {item.name}
                            <div className="badge badge-secondary">{item.category}</div>
                        </h2>
                        <p>{item.title}</p>
                        <div className="card-actions  justify-between">
                            <div className="badge badge-outline">${item.price}</div>
                            <div className="badge badge-outline hover:bg-pink-500 hover:text-white hover:px-2 py-1 hover:border-black border-1 rounded-full duration-200">Buy Now</div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

