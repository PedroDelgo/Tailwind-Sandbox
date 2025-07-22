import image from '../assets/image.jpg'

function Subscribecard() {
    return (
        <>  {/*card*/}
            <div className="bg-zinc-800 p-2 mx-6 rounded-2xl">
                <div className="flex flex-col md:flex-row">
                    <img
                        src={image}
                        alt="card image"
                        className='select-none rounded-xl md:rounded-l-xl md:rounded-r-none object-fit h-80 md:h-64 hover:scale-105 duration-200' />
                    <div className="select-none p-6 md:p-12">
                        <h2 className="text-white text-center font-medium text-xl md:text-left">
                            Faça agora sua inscrição
                        </h2>
                        <p className="max-w-sm my-4 text-xs text-center text-white md:text-left">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae molestias deleniti fuga optio et sapiente aspernatur exercitationem tenetur. Provident, ipsam!
                        </p>
                        <div className="flex flex-col mt-5 space-y-4 md:flex-row md:space-x-5">
                            <input type="text"
                                   placeholder='Coloque seu Email'
                                   className='text-center text-white px-4 placeholder:text-sm border border-zinc-600 rounded-sm py-1 placeholder:md:text-left md:text-left focus:outline-none'/>
                            <button className="px-4 py-2 text-sm rounded-md text-zinc-800 bg-lime-500 hover:bg-lime-700 duration-500 hover:text-white md:h-9">Inscreva-se</button>
                        </div>
                    </div>
                </div>
            </div>
            {/*Flex container*/}
        </>
    )
}
export default Subscribecard