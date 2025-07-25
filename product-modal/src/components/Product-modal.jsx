import produto from '../assets/lg-ultra-gear.png'
function ProductModal() {
    return (
        <>
            <div className="bg-black p-2 w-96 h-[650px] rounded-xl flex flex-col justify-center items-center md:flex-row md:w-[750px] md:h-[400px]">
                <img src={produto}
                    alt="imagem do produto"
                    className='w-50' />
                <div className="bg-red-200 w-full h-full felx flex-col justify-center items-center">
                    <div className='md:items-start bg-red-900 space-y-3 flex-col p-2 w-auto flex items-center justify-center'>
                        <p className='rounded-2xl text-center border-2 border-black font-medium bg-black text-white w-30' >Free Shiping</p>
                        <p className='font-bold text-3xl'>Monitor Lg Ultra Gear 24 180hz</p>
                        <p className='text-xs font-light line-through'>1199$</p>
                        <p className='text-3xl font-bold'>799$</p>
                        <p>This offer is valid until march 27 or as long stocks lasts !</p>
                    </div>
                    <div className='bg-orange-300 p-4 space-y-3 flex flex-col justify-center items-center h-57 md:h-50'>
                        <button className='rounded-md h-10 bg-blue-700 w-78 h-12' >Buy</button>
                        <p className='w-78 text-start'>50 pcs in stock</p>
                        <button className='rounded-md h-10 bg-blue-700 w-78 h-12' >Add to cart</button>
                        <button className=' rounded-md h-10 bg-blue-700 w-78 h-12' >Add to wish list</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductModal
