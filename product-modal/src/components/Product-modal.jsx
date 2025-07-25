import produto from '../assets/lg-ultra-gear.png'
function ProductModal() {
    return (
        <>
            <div className="bg-black w-96 h-[650px] rounded-xl flex flex-col justify-center items-center md:flex-row md:w-[750px] md:h-[400px]">
                <img src={produto}
                    alt="imagem do produto"
                    className='w-50' />
                <div className="bg-red-200 w-full h-full felx flex-col justify-center items-center">
                    <div className='p-2 w-auto flex items-center justify-center'>
                        <p className=' rounded-2xl text-center border-2 border-black font-medium bg-black text-white w-30' >Free Shiping</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductModal
