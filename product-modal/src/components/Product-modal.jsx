import produto from '../assets/lg-ultra-gear.png'
function ProductModal() {
    return (
        <>
            <div className="bg-white drop-shadow-2xl p-2 w-96 h-[650px] rounded-xl flex flex-col justify-center items-center md:flex-row md:w-[720px] md:h-[400px]">
                <img src={produto}
                    alt="imagem do produto"
                    className='w-50 hover:-translate-y-0.5 duration-300 rounded-3xl' />
                <div className="w-full h-full felx flex-col justify-center items-center">
                    <div className='md:mt-4 md:items-start space-y-3 flex-col p-2 w-auto flex items-center justify-center'>
                        <p className='rounded-2xl text-center border-2 border-black font-medium bg-black text-white w-30' >Free Shiping</p>
                        <p className='font-bold text-2xl'>Monitor Lg Ultra Gear</p>
                        <p className='text-xs font-light line-through'>1199$</p>
                        <p className='text-3xl font-bold'>799$</p>
                        <p className='text-sm text-gray-400 '>This offer is valid until march 27 or as long stocks lasts !</p>
                    </div>
                    <div className='p-4 space-y-3 flex flex-col justify-center items-center h-60 md:h-50 md:items-start'>
                        <button className='text-white hover:bg-blue-700 hover:border-blue-500 duration-200 border-b-4 border-blue-700 font-bold rounded-md bg-blue-500 md:w-122 w-78 h-12 p-3' >Buy</button>
                        <p className='text-sm font-medium w-78 text-start'>50 pcs in stock</p>
                        <div className='h-100 flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2'>
                            <button className='border-b-4 border-blue-700 text-white font-medium rounded-md bg-blue-500 md:w-60 md:h-12 w-78 h-12 hover:bg-blue-700 hover:border-blue-500 duration-200' >Add to cart</button>
                            <button className='border-b-4 border-blue-700 text-white font-medium rounded-md bg-blue-500 md:w-60 md:h-12 w-78 h-12 hover:bg-blue-700 hover:border-blue-500 duration-200' >Add to wish list</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductModal
